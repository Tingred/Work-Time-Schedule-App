package com.WorkTimeSchedule.project.module.schedule.service;

import com.WorkTimeSchedule.project.module.schedule.dto.ShiftDto;
import com.WorkTimeSchedule.project.module.schedule.entity.ShiftEntity;
import com.WorkTimeSchedule.project.module.schedule.form.ShiftForm;
import com.WorkTimeSchedule.project.module.schedule.mapper.ShiftMapper;
import com.WorkTimeSchedule.project.module.schedule.repository.ScheduleRepository;
import com.WorkTimeSchedule.project.module.schedule.repository.ShiftRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Time;
import java.util.List;

@Service
public class ShiftService {

    @Autowired
    private ScheduleRepository scheduleRepository;

    @Autowired
    private ShiftRepository shiftRepository;

    public List<ShiftDto> getAllShifts(){
        return ShiftMapper.map(shiftRepository.findAll());
    }

    public ShiftDto createShift(ShiftForm form) {
        return ShiftMapper.map(shiftRepository.saveAndFlush(
                new ShiftEntity(Time.valueOf(form.getStartTime()),Time.valueOf(form.getFinishTime()))));
    }

    public void deleteShift(String uuid){
        ShiftEntity toDeleteEntity = shiftRepository.findOneByUuid(uuid);
        shiftRepository.delete(toDeleteEntity);
    }

    public ShiftDto update(ShiftForm form, String uuid){
        ShiftEntity toUpdate = shiftRepository.findOneByUuid(uuid);
        toUpdate.setStartTime(Time.valueOf(form.getStartTime()));
        toUpdate.setFinishTime(Time.valueOf(form.getFinishTime()));
        return ShiftMapper.map(shiftRepository.saveAndFlush(toUpdate));
    }
}
