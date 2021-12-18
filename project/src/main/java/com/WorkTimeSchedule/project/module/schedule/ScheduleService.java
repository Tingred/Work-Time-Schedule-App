package com.WorkTimeSchedule.project.module.schedule;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ScheduleService {

    @Autowired
    private ScheduleRepository scheduleRepository;

    public void save(ScheduleForm form) {
        //TODO
        //zrobić zapisywanie w bazie z Form
    }

    public List<ScheduleDto> getAll() {
        return ScheduleMapper.map(scheduleRepository.findAll());
    }
}
