package com.WorkTimeSchedule.project.module.employee;

import com.WorkTimeSchedule.project.module.employee.entity.EmployeeEntity;

import java.util.List;
import java.util.stream.Collectors;

public class EmployeeMapper {

    public static EmployeeDto map(EmployeeEntity entity){
        return new EmployeeDto()
                .setUuid(entity.getUuid())
                .setName(entity.getName())
                .setSurname(entity.getSurname())
                .setGender(entity.getGender().toString())
                .setPosition(entity.getPosition().toString())
                .setTasks(entity.getTasks());
    }

    public static List<EmployeeDto> map(List<EmployeeEntity> entities){
        return entities.stream()
                .map(EmployeeMapper::map)
                .collect(Collectors.toList());
    }
}
