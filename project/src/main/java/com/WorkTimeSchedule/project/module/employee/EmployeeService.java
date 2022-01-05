package com.WorkTimeSchedule.project.module.employee;


import com.WorkTimeSchedule.project.module.employee.entity.PositionEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private  EmployeeRepository employeeRepository;

    public EmployeeDto getOneByUuid(String uuid) {
        return EmployeeMapper.map(employeeRepository.getOneByUuid(uuid));
    };

    public List<EmployeeDto> findAll(){
        return EmployeeMapper.map(employeeRepository.findAll());
    };

    public List<EmployeeDto> findAll(PositionEnum position) {
        if(position!=null){
            return EmployeeMapper.map(employeeRepository.findAllByPosition(position));
        }
        return EmployeeMapper.map(employeeRepository.findAll());
    }
}
