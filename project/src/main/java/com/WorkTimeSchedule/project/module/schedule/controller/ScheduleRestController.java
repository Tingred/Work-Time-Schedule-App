package com.WorkTimeSchedule.project.module.schedule.controller;

import com.WorkTimeSchedule.project.module.schedule.dto.ScheduleDto;
import com.WorkTimeSchedule.project.module.schedule.dto.ShiftDto;
import com.WorkTimeSchedule.project.module.schedule.form.ScheduleForm;
import com.WorkTimeSchedule.project.module.schedule.form.ShiftForm;
import com.WorkTimeSchedule.project.module.schedule.service.ScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

@RestController
public class ScheduleRestController {

    @Autowired
    private ScheduleService scheduleService;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping(value = "/api/schedule/new")
    public void newSchedule(@RequestBody ScheduleForm form) {
        scheduleService.save(form);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value = "/api/schedule/load/all")
    public List<ScheduleDto> getAllSchedules(){
        return scheduleService.getAllSchedules();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value = "/api/schedule/load/byDate")
    public List<ScheduleDto> getAllSchedules(@RequestBody String date){
        return scheduleService.getAllByDate(LocalDate.parse(date));
    }
}
