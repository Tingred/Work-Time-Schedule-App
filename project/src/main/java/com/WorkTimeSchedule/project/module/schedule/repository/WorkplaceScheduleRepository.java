package com.WorkTimeSchedule.project.module.schedule.repository;

import com.WorkTimeSchedule.project.module.schedule.entity.ShiftEntity;
import com.WorkTimeSchedule.project.module.schedule.entity.WorkplaceScheduleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WorkplaceScheduleRepository extends JpaRepository<WorkplaceScheduleEntity, Long>, JpaSpecificationExecutor<WorkplaceScheduleEntity> {

    List<WorkplaceScheduleEntity> findAllByScheduleId(Long id);
}
