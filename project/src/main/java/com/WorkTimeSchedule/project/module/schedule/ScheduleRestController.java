package com.WorkTimeSchedule.project.module.schedule;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ScheduleRestController {

    @Autowired
    private ScheduleService scheduleService;

    @PostMapping(value = "/api/schedule/new")
    public void newSchedule(@RequestBody ScheduleForm form) {
        scheduleService.save(form);
    }

    @GetMapping(value = "/api/schedule/load/all")
    public List<ScheduleDto> getAllSchedules(){
        return scheduleService.getAll();
    }
    
}
