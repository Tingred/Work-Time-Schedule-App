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
@CrossOrigin(origins = "http://localhost:4200")
public class WorkplaceRestController {

    @Autowired
    private WorkplaceService workplaceService;

    @GetMapping(value = "/api/workplace/all")
    public List<WorkplaceDto> getList() {
        return workplaceService.getAll();
    }

    @GetMapping(value = "/api/workplace/positions")
    public List<String> getPositions() {
        return workplaceService.getPositions();
    }

    @PostMapping(value = "/api/workplace/new")
    public void newWorkplace(
            @RequestBody WorkplaceForm workplace){
       workplaceService.create(workplace);
    }

    @DeleteMapping(value = "/api/workplace/delete/{uuid}")
    public void deleteWorkplace(
            @PathVariable String uuid){
        workplaceService.delete(uuid);
    }

    @PutMapping(value = "/api/workplace/update/{uuid}")
    public void updateWorkplace(
            @PathVariable String uuid,
            @RequestBody WorkplaceForm form){
        workplaceService.update(uuid,form);
    }
}
