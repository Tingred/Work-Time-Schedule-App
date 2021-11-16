package com.WorkTimeSchedule.project.module.workplace;

import com.WorkTimeSchedule.project.module.hall.HallDto;
import com.WorkTimeSchedule.project.module.hall.HallEntity;
import com.WorkTimeSchedule.project.module.hall.HallForm;
import com.WorkTimeSchedule.project.module.hall.HallMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

@RestController
public class WorkplaceRestController {

    @Autowired
    private WorkplaceService workplaceService;

    @GetMapping(value = "/api/workplace/all")
    public List<WorkplaceDto> getList() {
        return workplaceService.getAll();
    }

    @PostMapping(value = "/api/workplace/new")
    public void newWorkplace(
            @RequestBody WorkplaceForm workplace){
        workplaceService.save(workplace);
    }

    @DeleteMapping(value = "/api/workplace/delete/{uuid}")
    public void deleteWorkplace(
            @PathVariable String uuid){
        WorkplaceEntity toDelete = workplaceService.findByUuid(uuid);
        workplaceService.delete(toDelete);
    }

    @PutMapping(value = "/api/workplace/update/{uuid}")
    public void updateWorkplace(
            @PathVariable String uuid,
            @RequestBody WorkplaceForm form){
        WorkplaceEntity toUpdate = workplaceService.findByUuid(uuid);
        workplaceService.update(toUpdate.setName(form.getName()));
    }
}
