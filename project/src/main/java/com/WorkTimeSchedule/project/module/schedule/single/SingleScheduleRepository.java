package com.WorkTimeSchedule.project.module.schedule.single;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface SingleScheduleRepository extends JpaRepository<SingleScheduleEntity, Long>, JpaSpecificationExecutor<SingleScheduleEntity> {

}
