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

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ShiftRestController {

    @Autowired
    private ShiftService shiftService;

    @GetMapping(value = "/api/shifts")
    public List<ShiftDto> getAllShifts(){
        return shiftService.getAllShifts();
    }
    @PostMapping(value = "/api/shift/new")
    public ShiftDto createShift(@RequestBody ShiftForm form){
        return shiftService.createShift(form);
    }
    @PutMapping(value = "/api/shift/update/{uuid}")
    public ShiftDto updateShift(@PathVariable String uuid,
                                @RequestBody ShiftForm form){
        return shiftService.update(form,uuid);
    }
    @DeleteMapping(value = "/api/shift/delete/{uuid}")
    public void deleteShift(@PathVariable String uuid){
        shiftService.deleteShift(uuid);
    }

}
