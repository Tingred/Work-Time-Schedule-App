package com.WorkTimeSchedule.project.module.employee.service;

import com.WorkTimeSchedule.project.module.employee.TaskForm;
import com.WorkTimeSchedule.project.module.employee.dto.TaskDto;
import com.WorkTimeSchedule.project.module.employee.entity.EmployeeEntity;
import com.WorkTimeSchedule.project.module.employee.entity.TaskEntity;
import com.WorkTimeSchedule.project.module.employee.mapper.TaskMapper;
import com.WorkTimeSchedule.project.module.employee.repository.EmployeeRepository;
import com.WorkTimeSchedule.project.module.employee.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<TaskDto> getAllEmployeeTasks(String uuid) {
        return TaskMapper.map(taskRepository
                .findAllByEmployeeId(employeeRepository
                        .findOneByUuid(uuid)
                        .getId()));
    }
    public TaskDto addTask(String uuid, TaskForm form) {
        EmployeeEntity entity = employeeRepository.findOneByUuid(uuid);
        return TaskMapper.map(
                taskRepository.saveAndFlush(
                                new TaskEntity(entity, form.getText(), LocalDate.parse(form.getDate()))));
    }

    public void deleteTask(String uuid) {
        TaskEntity taskToDelete = taskRepository.findOneByUuid(uuid);
        taskRepository.delete(taskToDelete);
    }
}
