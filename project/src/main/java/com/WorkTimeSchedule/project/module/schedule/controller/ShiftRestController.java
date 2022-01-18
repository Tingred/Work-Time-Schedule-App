package com.WorkTimeSchedule.project.module.schedule.controller;

import com.WorkTimeSchedule.project.module.schedule.dto.ShiftDto;
import com.WorkTimeSchedule.project.module.schedule.form.ShiftForm;
import com.WorkTimeSchedule.project.module.schedule.service.ShiftService;
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
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ShiftRestController {

    @Autowired
    private ShiftService shiftService;

    @CrossOrigin(origins = {"http://localhost:4200", "https://worktime-schedule-app.herokuapp.com"})
    @GetMapping(value = "/api/shifts")
    public List<ShiftDto> getAllShifts(){
        return shiftService.getAllShifts();
    }
    @CrossOrigin(origins = {"http://localhost:4200", "https://worktime-schedule-app.herokuapp.com"})
    @GetMapping(value = "/api/shift/{uuid}")
    public ShiftDto getShift(@PathVariable String uuid){
        return shiftService.getShift(uuid);
    }
    @CrossOrigin(origins = {"http://localhost:4200", "https://worktime-schedule-app.herokuapp.com"})
    @PostMapping(value = "/api/shift/new")
    public ShiftDto createShift(@Valid @RequestBody ShiftForm form){
        return shiftService.createShift(form);
    }
    @CrossOrigin(origins = {"http://localhost:4200", "https://worktime-schedule-app.herokuapp.com"})
    @PutMapping(value = "/api/shift/update/{uuid}")
    public ShiftDto updateShift(@PathVariable String uuid,
                                @Valid @RequestBody ShiftForm form){
        return shiftService.update(form,uuid);
    }
    @CrossOrigin(origins = {"http://localhost:4200", "https://worktime-schedule-app.herokuapp.com"})
    @DeleteMapping(value = "/api/shift/delete/{uuid}")
    public void deleteShift(@PathVariable String uuid){
        shiftService.deleteShift(uuid);
    }

}
