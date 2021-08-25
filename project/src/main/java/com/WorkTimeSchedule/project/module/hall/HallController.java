package com.WorkTimeSchedule.project.module.hall;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HallController {

    @Autowired
    private HallService hallService;

    @GetMapping(value = "/api/halls")
    public List<HallDto> getList() {
        return HallMapper.map(hallService.findAll());
    }

    @PostMapping(value = "/api/halls")
    public void newHall(
            @RequestBody HallEntity entity) {
        hallService.save(entity);
    }
    @DeleteMapping(value = "/api/hall/{id}")
    public void deleteHall(
            @PathVariable Integer id){
        HallEntity toDelete = hallService.findOne(id);
        hallService.delete(toDelete);
    }
}
