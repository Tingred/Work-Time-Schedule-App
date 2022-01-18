package com.WorkTimeSchedule.project.module.schedule.service;

import com.WorkTimeSchedule.project.module.employee.mapper.EmployeeMapper;
import com.WorkTimeSchedule.project.module.employee.repository.EmployeeRepository;
import com.WorkTimeSchedule.project.module.schedule.dto.WorkplaceScheduleDto;
import com.WorkTimeSchedule.project.module.schedule.entity.ScheduleEntity;
import com.WorkTimeSchedule.project.module.schedule.entity.WorkplaceScheduleEntity;
import com.WorkTimeSchedule.project.module.schedule.form.ScheduleForm;
import com.WorkTimeSchedule.project.module.schedule.dto.ScheduleDto;
import com.WorkTimeSchedule.project.module.schedule.mapper.ShiftMapper;
import com.WorkTimeSchedule.project.module.schedule.repository.ScheduleRepository;
import com.WorkTimeSchedule.project.module.schedule.repository.ShiftRepository;
import com.WorkTimeSchedule.project.module.schedule.repository.WorkplaceScheduleRepository;
import com.WorkTimeSchedule.project.module.workplace.WorkplaceEntity;
import com.WorkTimeSchedule.project.module.workplace.WorkplaceMapper;
import com.WorkTimeSchedule.project.module.workplace.WorkplaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;



@Service
public class ScheduleService {

    @Autowired
    private ScheduleRepository scheduleRepository;

    @Autowired
    private ShiftRepository shiftRepository;

    @Autowired
    private WorkplaceScheduleRepository workplaceScheduleRepository;

    @Autowired
    private WorkplaceRepository workplaceRepository;

    @Autowired
    private EmployeeRepository employeeRepository;


    public List<ScheduleDto> getAllSchedules() {

        // TODO PRZEANALIZOWAC TO JESZCZE RAZ
        List<ScheduleEntity> schedules = scheduleRepository.findAll();

        return schedules.stream().map(s -> new ScheduleDto()
                .setShift(ShiftMapper.map(s.getShift()))
                .setDate(s.getScheduleDate().toString())
                .setWorkplaces(mapScheduleWorkplaces(s.getId())))
                .collect(Collectors.toList());

    }
    public ScheduleDto getSchedule(String date, String shiftUuid) {
        ScheduleEntity entity = scheduleRepository.findOneByScheduleDateAndShiftId(
                LocalDate.parse(date),shiftRepository.findOneByUuid(shiftUuid).getId());

        List<WorkplaceScheduleDto> workplaces = mapScheduleWorkplaces(entity.getId());
        return mapScheduleToDto(entity,workplaces);
    }

    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    public List<ScheduleDto> getAllEmployeeSchedules(String uuid) {

        List<WorkplaceScheduleEntity> allByEmployeesUuidsContains = workplaceScheduleRepository.findAll().stream().filter(w -> w.getEmployeesUuids().contains(uuid)).collect(Collectors.toList());
        return allByEmployeesUuidsContains.stream().map(
                (workplace) -> {
                    ScheduleEntity oneById = scheduleRepository.findOneById(workplace.getSchedule().getId());
                    return new ScheduleDto().setDate(oneById.getScheduleDate().toString())
                            .setShift(ShiftMapper.map(oneById.getShift()))
                            .setWorkplaces(List.of(
                                    new WorkplaceScheduleDto()
                                            .setWorkplace(WorkplaceMapper.map(
                                                    workplaceRepository.findOneByUuid(workplace.getWorkplaceUuid())))
                                            .setEmployees(EmployeeMapper.map(List.of(employeeRepository.findOneByUuid(uuid))))
                            ));
                }
        ).collect(Collectors.toList());
    }
    public ScheduleDto save(ScheduleForm form) {

        ScheduleEntity schedule = new ScheduleEntity()
                .setScheduleDate(LocalDate.parse(form.getDate()))
                .setShift(shiftRepository.findOneByUuid(form.getShiftUuid()));

        List<WorkplaceScheduleEntity> workplaceScheduleEntities = form.getWorkplaces().stream()
                .map(w -> new WorkplaceScheduleEntity()
                        .setWorkplaceUuid(w.getWorkplaceUuid())
                        .setEmployeesUuids(w.getEmployeeUuids())
                        .setSchedule(schedule)).collect(Collectors.toList());
        schedule.setWorkplaces(workplaceScheduleEntities);
        scheduleRepository.saveAndFlush(schedule);
        return mapScheduleToDto(schedule,mapScheduleWorkplaces(schedule.getId()));

    }
    public ScheduleDto update(ScheduleForm form) {

        ScheduleEntity  entity = scheduleRepository.findOneByScheduleDateAndShiftId(LocalDate.parse(form.getDate()),shiftRepository.findOneByUuid(form.getShiftUuid()).getId());
        workplaceScheduleRepository.deleteAll(workplaceScheduleRepository.findAllByScheduleId(entity.getId()));
        entity.setScheduleDate(LocalDate.parse(form.getDate()))
                .setShift(shiftRepository.findOneByUuid(form.getShiftUuid()));
        List<WorkplaceScheduleEntity> workplaceScheduleEntities = form.getWorkplaces().stream()
                .map(w -> new WorkplaceScheduleEntity()
                        .setWorkplaceUuid(w.getWorkplaceUuid())
                        .setEmployeesUuids(w.getEmployeeUuids())
                        .setSchedule(entity)).collect(Collectors.toList());
        entity.setWorkplaces(workplaceScheduleEntities);
        scheduleRepository.saveAndFlush(entity);
        return mapScheduleToDto(entity,mapScheduleWorkplaces(entity.getId()));
    }
    public void delete(String date, String shiftUuid){
        scheduleRepository.delete(scheduleRepository.findOneByScheduleDateAndShiftId(LocalDate.parse(date),shiftRepository.findOneByUuid(shiftUuid).getId()));
    }

    public List<WorkplaceScheduleDto> mapScheduleWorkplaces(Long scheduleId){
        return workplaceScheduleRepository.findAllByScheduleId(scheduleId)
                .stream().map(w -> new WorkplaceScheduleDto()
                        .setWorkplace(WorkplaceMapper.map(workplaceRepository.findOneByUuid(w.getWorkplaceUuid())))
                        .setEmployees(EmployeeMapper.map(w.getEmployeesUuids()
                                .stream().map(u -> employeeRepository.findOneByUuid(u))
                                .collect(Collectors.toList()))))
                .collect(Collectors.toList());
    }
    public ScheduleDto mapScheduleToDto(ScheduleEntity entity, List<WorkplaceScheduleDto> workplaces){
        return new ScheduleDto()
                .setDate(entity.getScheduleDate().toString())
                .setShift(ShiftMapper.map(entity.getShift()))
                .setWorkplaces(workplaces);
    }

}
