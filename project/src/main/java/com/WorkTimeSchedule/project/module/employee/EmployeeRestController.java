package com.WorkTimeSchedule.project.module.employee;

import com.WorkTimeSchedule.project.module.employee.dto.EmployeeDto;
import com.WorkTimeSchedule.project.module.employee.dto.TaskDto;
import com.WorkTimeSchedule.project.module.employee.entity.PositionEnum;
import com.WorkTimeSchedule.project.module.employee.service.EmployeeService;
import com.WorkTimeSchedule.project.module.employee.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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

    @Autowired
    private TaskService taskService;

    @GetMapping(value = "/api/employee/{uuid}")
    public EmployeeDto getEmployeeByGuid(@PathVariable String uuid){
        return employeeService.getOneByUuid(uuid);
    }

    @GetMapping(value = "/api/employees")
    public List<EmployeeDto> getEmployees(){
        return employeeService.findAll();
    }

    @GetMapping(value = "/api/employee/by-position")
    public List<EmployeeDto> getEmployeesByPosition(
            @RequestParam String position){
        PositionEnum value = PositionEnum.valueOf(position);
        return employeeService.findAll(value);
    }
    @GetMapping(value = "/api/employee/tasks/{uuid}")
    public List<TaskDto> getTasks(@PathVariable String uuid){
        return taskService.getAllEmployeeTasks(uuid);
    }

    @PostMapping(value = "/api/employee/new-task/{uuid}")
    public TaskDto addTask(@PathVariable String uuid,
                           @RequestBody TaskForm form){
        return taskService.addTask(uuid,form);
    }
    @DeleteMapping(value = "/api/employee/delete-task/{uuid}")
    public void deleteTask(@PathVariable String uuid){
        taskService.deleteTask(uuid);
    }
}
