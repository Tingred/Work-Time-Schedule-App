package com.WorkTimeSchedule.project.module.employee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepisitory extends JpaRepository<EmployeeEntity, Long>, JpaSpecificationExecutor<EmployeeEntity> {

    EmployeeEntity getOneByGuid(String guid);

    List<EmployeeEntity> findAll();

    List<EmployeeEntity> findAllByStanowisko(PositionEnum stanowisko);

}
