package com.WorkTimeSchedule.project.module.schedule.week;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WeekScheduleController {

    @Autowired
    private WeekScheduleService weekScheduleService;


}
