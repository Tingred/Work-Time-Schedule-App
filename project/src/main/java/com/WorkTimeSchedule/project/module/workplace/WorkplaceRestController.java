package com.WorkTimeSchedule.project.module.workplace;

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

public class WorkplaceRestController {

    @Autowired
    private WorkplaceService workplaceService;

    @CrossOrigin(origins = {"http://localhost:4200", "https://worktime-schedule-app.herokuapp.com"})
    @GetMapping(value = "/api/workplace/all")
    public List<WorkplaceDto> getList() {
        return workplaceService.getAll();
    }

    @CrossOrigin(origins = {"http://localhost:4200", "https://worktime-schedule-app.herokuapp.com"})
    @GetMapping(value = "/api/workplace/positions")
    public List<String> getPositions() {
        return workplaceService.getPositions();
    }

    @CrossOrigin(origins = {"http://localhost:4200", "https://worktime-schedule-app.herokuapp.com"})
    @PostMapping(value = "/api/workplace/new")
    public WorkplaceDto newWorkplace(
            @RequestBody WorkplaceForm workplace){
        return workplaceService.create(workplace);

    }
    @CrossOrigin(origins = {"http://localhost:4200", "https://worktime-schedule-app.herokuapp.com"})
    @DeleteMapping(value = "/api/workplace/delete/{uuid}")
    public void deleteWorkplace(
            @PathVariable String uuid){
        workplaceService.delete(uuid);
    }
    @CrossOrigin(origins = {"http://localhost:4200", "https://worktime-schedule-app.herokuapp.com"})
    @PutMapping(value = "/api/workplace/update/{uuid}")
    public void updateWorkplace(
            @PathVariable String uuid,
            @RequestBody WorkplaceForm form){
        workplaceService.update(uuid,form);
    }
}
