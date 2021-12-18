package com.WorkTimeSchedule.project.module.schedule;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ScheduleRepository extends JpaRepository<ScheduleEntity, Long>, JpaSpecificationExecutor<ScheduleEntity> {

    List<ScheduleEntity> findAll();
}
