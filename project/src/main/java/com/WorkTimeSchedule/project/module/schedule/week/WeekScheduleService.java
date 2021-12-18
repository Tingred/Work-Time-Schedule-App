package com.WorkTimeSchedule.project.module.schedule.week;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WeekScheduleService {

    @Autowired
    private WeekScheduleRepository weekScheduleRepository;
}
