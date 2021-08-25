package com.WorkTimeSchedule.project.module.employee;

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

    @GetMapping(value = "/api/employee/{guid}")
    public EmployeeDto getOneEmployee(@PathVariable String guid){
        return EmployeeMapper.map(employeeService.getOneByGuid(guid));
    }

    @GetMapping("/api/employees")
    public List<EmployeeDto> getAllEmployees(){
        return EmployeeMapper.map(employeeService.findAll());
    }

    @GetMapping(value = "/api/employee")
    public List<EmployeeDto> getAllEmployeesByStanowisko(
            @RequestParam(required = false) String stanowisko){
        PositionEnum value = PositionEnum.fromString(stanowisko);
        return EmployeeMapper.map(employeeService.findAll(value));
    }
}
