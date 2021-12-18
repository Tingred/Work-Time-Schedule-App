package com.WorkTimeSchedule.project.module.schedule.week;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface WeekScheduleRepository extends JpaRepository<WeekScheduleEntity, Long>, JpaSpecificationExecutor<WeekScheduleEntity> {

}
