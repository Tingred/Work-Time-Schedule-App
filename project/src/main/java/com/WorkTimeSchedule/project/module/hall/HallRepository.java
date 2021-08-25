package com.WorkTimeSchedule.project.module.hall;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HallRepository extends JpaRepository<HallEntity, Integer>, JpaSpecificationExecutor<HallEntity> {

    HallEntity findOneById(Integer id);

    List<HallEntity> findAll();
}
