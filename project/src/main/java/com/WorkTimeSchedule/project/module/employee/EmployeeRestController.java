package com.WorkTimeSchedule.project.module.employee;

import com.WorkTimeSchedule.project.module.employee.dto.EmployeeDto;
import com.WorkTimeSchedule.project.module.employee.entity.PositionEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeRestController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping(value = "/api/employee/{uuid}")
    public EmployeeDto getEmployeeByGuid(@PathVariable String uuid){
        return employeeService.getOneByUuid(uuid);
    }

    @GetMapping(value = "/api/employees")
    public List<EmployeeDto> getEmployees(){
        return employeeService.findAll();
    }

    @GetMapping(value = "/api/employee")
    public List<EmployeeDto> getEmployeesByPosition(
            @RequestParam(required = false) String position){
        PositionEnum value = PositionEnum.fromString(position);
        return employeeService.findAll(value);
    }

    @PutMapping(value = "/api/employee/new-task/{uuid}")
    public void addTask(@PathVariable String uuid,
                        @RequestBody TaskForm form){
        employeeService.addTask(uuid,form);
    }
    @DeleteMapping(value = "/api/employee/delete-task/{uuid}")
    public void deleteTask(@PathVariable String uuid){
        employeeService.deleteTask(uuid);
    }
}
