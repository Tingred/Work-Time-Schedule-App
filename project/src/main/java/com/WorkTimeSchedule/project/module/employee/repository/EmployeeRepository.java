package com.WorkTimeSchedule.project.module.employee.repository;

import com.WorkTimeSchedule.project.module.employee.entity.EmployeeEntity;
import com.WorkTimeSchedule.project.module.employee.entity.PositionEnum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long>, JpaSpecificationExecutor<EmployeeEntity> {

    EmployeeEntity findOneByUuid(String uuid);

    List<EmployeeEntity> findAll();

    List<EmployeeEntity> findAllByPosition(PositionEnum position);

}
