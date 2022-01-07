package com.WorkTimeSchedule.project.module.employee;


import com.WorkTimeSchedule.project.module.employee.dto.EmployeeDto;
import com.WorkTimeSchedule.project.module.employee.entity.EmployeeEntity;
import com.WorkTimeSchedule.project.module.employee.entity.PositionEnum;
import com.WorkTimeSchedule.project.module.employee.entity.TaskEntity;
import com.WorkTimeSchedule.project.module.employee.mapper.EmployeeMapper;
import com.WorkTimeSchedule.project.module.employee.mapper.TaskMapper;
import com.WorkTimeSchedule.project.module.employee.repository.EmployeeRepository;
import com.WorkTimeSchedule.project.module.employee.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
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
        List<TaskEntity> tasks = taskRepository.findAllByEmployeeId(entity.getId());
        return EmployeeMapper.map(entity, TaskMapper.map(tasks));
    }

    ;

    public List<EmployeeDto> findAll() {

        return employeeRepository.findAll()
                .stream()
                .map(e -> EmployeeMapper
                        .map(e, TaskMapper.map(taskRepository.findAllByEmployeeId(e.getId()))))
                .collect(Collectors.toList());
    }

    public List<EmployeeDto> findAll(PositionEnum position) {
        return employeeRepository.findAllByPosition(position)
                .stream()
                .map(e -> EmployeeMapper
                        .map(e, TaskMapper.map(taskRepository.findAllByEmployeeId(e.getId()))))
                .collect(Collectors.toList());
    }

    public void addTask(String uuid,TaskForm form) {
        EmployeeEntity entity = employeeRepository.findOneByUuid(uuid);
        taskRepository.saveAndFlush(new TaskEntity(entity,form.getText(), LocalDate.parse(form.getDate())));
    }

    public void deleteTask(String uuid) {
        TaskEntity taskToDelete = taskRepository.findOneByUuid(uuid);
        taskRepository.delete(taskToDelete);
    }
}
