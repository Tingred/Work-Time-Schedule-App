package com.WorkTimeSchedule.project.module.schedule.repository;
import com.WorkTimeSchedule.project.module.schedule.entity.ShiftEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShiftRepository extends JpaRepository<ShiftEntity, Long>, JpaSpecificationExecutor<ShiftEntity> {

    List<ShiftEntity> findAll();
    ShiftEntity findOneById(Long id);
    ShiftEntity findOneByUuid(String uuid);
}
