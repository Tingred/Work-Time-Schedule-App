package com.WorkTimeSchedule.project.module.employee;

import com.WorkTimeSchedule.project.module.employee.entity.EmployeeEntity;

import java.util.List;
import java.util.stream.Collectors;

public class EmployeeMapper {

    public static EmployeeDto map(EmployeeEntity entity,List<String> tasks){
        return new EmployeeDto()
                .setUuid(entity.getUuid())
                .setName(entity.getName())
                .setSurname(entity.getSurname())
                .setGender(entity.getGender().toString())
                .setPosition(entity.getPosition().toString())
                .setTasks(tasks);
    }
}
