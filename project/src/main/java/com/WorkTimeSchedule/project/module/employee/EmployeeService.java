package com.WorkTimeSchedule.project.module.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private  EmployeeRepisitory employeeRepisitory;

    public EmployeeEntity getOneByGuid(String guid) {
        return employeeRepisitory.getOneByGuid(guid);
    };

    public List<EmployeeEntity> findAll(){
        return employeeRepisitory.findAll();
    };

    public List<EmployeeEntity> findAllByStanowisko(Position stanowisko){
        return employeeRepisitory.findAllByStanowisko(stanowisko);
    };
}
