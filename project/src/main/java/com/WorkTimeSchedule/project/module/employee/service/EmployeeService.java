package com.WorkTimeSchedule.project.module.employee.service;


import com.WorkTimeSchedule.project.module.employee.TaskForm;
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
        return EmployeeMapper.map(entity);
    }

    public List<EmployeeDto> findAll() {
        return EmployeeMapper
                .map(employeeRepository.findAll());
    }

    public List<EmployeeDto> findAll(PositionEnum position) {
        return EmployeeMapper
                .map(employeeRepository.findAllByPosition(position));
    }
}
