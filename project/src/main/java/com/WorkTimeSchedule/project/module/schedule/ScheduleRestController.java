package com.WorkTimeSchedule.project.module.schedule;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
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

    @GetMapping(value = "/api/schedule/load/byDate")
    public List<ScheduleDto> getAllSchedules(@RequestBody String date){
        return scheduleService.getAllByDate(LocalDate.parse(date));
    }
}
