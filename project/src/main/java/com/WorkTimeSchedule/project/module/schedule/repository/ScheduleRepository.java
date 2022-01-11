package com.WorkTimeSchedule.project.module.schedule.repository;
import com.WorkTimeSchedule.project.module.schedule.entity.ScheduleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import java.time.LocalDate;
import java.util.List;

@Repository
public interface ScheduleRepository extends JpaRepository<ScheduleEntity, Long>, JpaSpecificationExecutor<ScheduleEntity> {

    List<ScheduleEntity> findAll();

    List<ScheduleEntity> findAllByScheduleDate(LocalDate date);
}
