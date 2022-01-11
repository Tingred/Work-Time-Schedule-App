package com.WorkTimeSchedule.project.module.schedule.service;

import com.WorkTimeSchedule.project.module.schedule.entity.ScheduleEntity;
import com.WorkTimeSchedule.project.module.schedule.entity.ShiftEntity;
import com.WorkTimeSchedule.project.module.schedule.form.ScheduleForm;
import com.WorkTimeSchedule.project.module.schedule.form.ShiftForm;
import com.WorkTimeSchedule.project.module.schedule.mapper.ScheduleMapper;
import com.WorkTimeSchedule.project.module.schedule.dto.ScheduleDto;
import com.WorkTimeSchedule.project.module.schedule.dto.ShiftDto;
import com.WorkTimeSchedule.project.module.schedule.mapper.ShiftMapper;
import com.WorkTimeSchedule.project.module.schedule.repository.ScheduleRepository;
import com.WorkTimeSchedule.project.module.schedule.repository.ShiftRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Time;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ScheduleService {

    @Autowired
    private ScheduleRepository scheduleRepository;

    @Autowired
    private ShiftRepository shiftRepository;

    public void save(ScheduleForm form) {
        //TODO SAVE
    }

    public List<ScheduleDto> getAllSchedules() {
        List<ScheduleEntity> schedules = scheduleRepository.findAll();
        return  schedules.stream()
                .map(s -> ScheduleMapper
                        .map(s,shiftRepository.findOneById(
                                s.getShift().getId())))
                .collect(Collectors.toList());
    }

    public List<ScheduleDto> getAllByDate(LocalDate date) {
        List<ScheduleEntity> schedules = scheduleRepository.findAllByScheduleDate(date);
        return schedules.stream()
                .map(s -> ScheduleMapper
                        .map(s,shiftRepository.findOneById(
                                s.getShift().getId())))
                .collect(Collectors.toList());
    }
}
