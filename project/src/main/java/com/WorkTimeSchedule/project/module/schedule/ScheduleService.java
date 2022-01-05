package com.WorkTimeSchedule.project.module.schedule;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ScheduleService {

    @Autowired
    private ScheduleRepository scheduleRepository;

    public void save(ScheduleForm form) {
        //TODO SAVE
    }

    public List<ScheduleDto> getAll() {
        return ScheduleMapper.map(scheduleRepository.findAll());
    }

    public List<ScheduleDto> getAllByDate(LocalDate date) {
        return ScheduleMapper.map(scheduleRepository.findAllByScheduleDate(date));
    }
}
