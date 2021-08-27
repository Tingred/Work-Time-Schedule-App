package com.WorkTimeSchedule.project.module.employee;

import com.WorkTimeSchedule.project.module.employee.entity.PositionEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping(value = "/api/employee/{uuid}")
    public EmployeeDto getEmployeeByGuid(@PathVariable String uuid){
        return EmployeeMapper.map(employeeService.getOneByUuid(uuid));
    }

    @GetMapping(value = "/api/employees")
    public List<EmployeeDto> getEmployees(){
        return EmployeeMapper.map(employeeService.findAll());
    }

    @GetMapping(value = "/api/employee")
    public List<EmployeeDto> getEmployeesByStanowisko(
            @RequestParam(required = false) String stanowisko){
        PositionEnum value = PositionEnum.fromString(stanowisko);
        return EmployeeMapper.map(employeeService.findAll(value));
    }
}
