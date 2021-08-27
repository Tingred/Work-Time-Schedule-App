package com.WorkTimeSchedule.project.module.employee;

import com.WorkTimeSchedule.project.module.employee.entity.EmployeeEntity;
import com.WorkTimeSchedule.project.module.employee.entity.PositionEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private  EmployeeRepisitory employeeRepisitory;

    public EmployeeEntity getOneByUuid(String uuid) {
        return employeeRepisitory.getOneByUuid(uuid);
    };

    public List<EmployeeEntity> findAll(){
        return employeeRepisitory.findAll();
    };

    public List<EmployeeEntity> findAll(PositionEnum stanowisko) {
        if(stanowisko!=null){
            return employeeRepisitory.findAllByStanowisko(stanowisko);
        }
        return employeeRepisitory.findAll();
    }
}
