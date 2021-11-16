package com.WorkTimeSchedule.project.module.hall;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HallRestController {

    @Autowired
    private HallService hallService;

    @GetMapping(value = "/api/hall/all")
    public List<HallDto> getList() {
        return HallMapper.map(hallService.findAll());
    }

    @PostMapping(value = "/api/hall/new")
    public void newHall(
            @RequestBody HallForm newHall) {
        hallService.save(newHall);
    }
    @DeleteMapping(value = "/api/hall/delete/{uuid}")
    public void deleteHall(
            @PathVariable String uuid){
        HallEntity toDelete = hallService.findOneByUuid(uuid);
        hallService.delete(toDelete);
    }
    @PutMapping(value = "/api/hall/update/{uuid}")
    public HallDto updateHall(
            @PathVariable String uuid,
            @RequestBody HallForm form){
        HallEntity toUpdate = hallService.findOneByUuid(uuid);
        hallService.update(toUpdate.setName(form.getName()));
        return HallMapper.map(toUpdate);
    }
}
