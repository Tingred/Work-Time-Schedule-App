package com.WorkTimeSchedule.project.module.hall;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HallService {

    @Autowired
    private HallRepository hallRepository;

    public List<HallEntity> findAll(){
        return hallRepository.findAll();
    }

    public void save(HallEntity entity) {
    hallRepository.save(entity);
    }

    public HallEntity findOne(Integer id) {
        return hallRepository.findOneById(id);
    }

    public void delete(HallEntity toDelete) {
        hallRepository.delete(toDelete);
    }
    public HallEntity update(HallEntity hallEntity){
        return hallRepository.saveAndFlush(hallEntity);
    }
}
