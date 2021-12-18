package com.WorkTimeSchedule.project.module.schedule.single;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SingleScheduleController {

    @Autowired
    private SingleScheduleService singleScheduleService;


}
