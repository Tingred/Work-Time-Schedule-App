package com.WorkTimeSchedule.project.module.employee;


import com.WorkTimeSchedule.project.module.employee.entity.EmployeeEntity;
import com.WorkTimeSchedule.project.module.employee.entity.PositionEnum;
import com.WorkTimeSchedule.project.module.employee.entity.TaskEntity;
import com.WorkTimeSchedule.project.module.employee.repository.EmployeeRepository;
import com.WorkTimeSchedule.project.module.employee.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private TaskRepository taskRepository;

    public EmployeeDto getOneByUuid(String uuid) {
        EmployeeEntity entity = employeeRepository.findOneByUuid(uuid);
        List<String> tasks = taskRepository.findTextByEmployeeId(entity.getId());
        return EmployeeMapper.map(entity, tasks);
    }

    ;

    public List<EmployeeDto> findAll() {

        return employeeRepository.findAll()
                .stream()
                .map(e -> EmployeeMapper
                        .map(e, taskRepository.findTextByEmployeeId(e.getId())))
                .collect(Collectors.toList());
    }

    public List<EmployeeDto> findAll(PositionEnum position) {
        return employeeRepository.findAllByPosition(position)
                .stream()
                .map(e -> EmployeeMapper
                        .map(e, taskRepository.findTextByEmployeeId(e.getId())))
                .collect(Collectors.toList());
    }

    public void addTask(String uuid, String task) {
        EmployeeEntity entity = employeeRepository.findOneByUuid(uuid);
        taskRepository.saveAndFlush(new TaskEntity()
                .setEmployee(entity)
                .setText(task));
    }
}
