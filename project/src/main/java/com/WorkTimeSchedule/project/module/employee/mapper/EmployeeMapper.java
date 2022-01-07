package com.WorkTimeSchedule.project.module.employee.mapper;

import com.WorkTimeSchedule.project.module.employee.dto.EmployeeDto;
import com.WorkTimeSchedule.project.module.employee.dto.TaskDto;
import com.WorkTimeSchedule.project.module.employee.entity.EmployeeEntity;
import com.WorkTimeSchedule.project.module.employee.entity.TaskEntity;

import java.util.List;

public class EmployeeMapper {

    public static EmployeeDto map(EmployeeEntity entity, List<TaskDto> tasks){
        return new EmployeeDto()
                .setUuid(entity.getUuid())
                .setName(entity.getName())
                .setSurname(entity.getSurname())
                .setGender(entity.getGender().toString())
                .setPosition(entity.getPosition().toString())
                .setTasks(tasks);
    }
}
