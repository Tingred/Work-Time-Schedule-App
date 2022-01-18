package com.WorkTimeSchedule.project.module.schedule.controller;

import com.WorkTimeSchedule.project.module.schedule.dto.ScheduleDto;
import com.WorkTimeSchedule.project.module.schedule.dto.ShiftDto;
import com.WorkTimeSchedule.project.module.schedule.form.ScheduleForm;
import com.WorkTimeSchedule.project.module.schedule.form.ShiftForm;
import com.WorkTimeSchedule.project.module.schedule.service.ScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.time.LocalDate;
import java.util.List;

@RestController
public class ScheduleRestController {

    @Autowired
    private ScheduleService scheduleService;

    @CrossOrigin(origins = {"http://localhost:4200", "https://worktime-schedule-app.herokuapp.com"})
    @PostMapping(value = "/api/schedule/new")
    public void newSchedule(@RequestBody ScheduleForm form) {
        scheduleService.save(form);
    }

    @CrossOrigin(origins = {"http://localhost:4200", "https://worktime-schedule-app.herokuapp.com"})
    @GetMapping(value = "/api/schedule/get-all")
    public List<ScheduleDto> getAllSchedules(){
        return scheduleService.getAllSchedules();
    }

    @CrossOrigin(origins = {"http://localhost:4200", "https://worktime-schedule-app.herokuapp.com"})
    @GetMapping(value = "/api/schedule/get/{date}/{shiftUuid}")
    public ScheduleDto getSchedule(@PathVariable String date,
                                   @PathVariable String shiftUuid){
        return scheduleService.getSchedule(date, shiftUuid);
    }
    @CrossOrigin(origins = {"http://localhost:4200", "https://worktime-schedule-app.herokuapp.com"})
    @GetMapping(value = "/api/schedule/get-all/{employeeUuid}")
    public List<ScheduleDto> getEmployeeSchedules(@PathVariable String employeeUuid){
        return scheduleService.getAllEmployeeSchedules(employeeUuid);
    }

    @CrossOrigin(origins = {"http://localhost:4200", "https://worktime-schedule-app.herokuapp.com"})
    @PutMapping(value = "/api/schedule/update")
    public void updateSchedule(@Valid @RequestBody ScheduleForm form){
        scheduleService.update(form);
    }

    @CrossOrigin(origins = {"http://localhost:4200", "https://worktime-schedule-app.herokuapp.com"})
    @DeleteMapping(value = "/api/schedule/delete/{date}/{shiftUuid}")
    public void deleteSchedule(@PathVariable String date,
                               @PathVariable String shiftUuid){
        scheduleService.delete(date,shiftUuid);
    }
}
