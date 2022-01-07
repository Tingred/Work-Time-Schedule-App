package com.WorkTimeSchedule.project.module.employee.repository;

import com.WorkTimeSchedule.project.module.employee.entity.TaskEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<TaskEntity, Long>, JpaSpecificationExecutor<TaskEntity> {

    List<TaskEntity> findAllByEmployeeId(Long id);
    TaskEntity findOneByUuid(String uuid);
}
