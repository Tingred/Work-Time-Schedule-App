package com.WorkTimeSchedule.project.module.employee.mapper;

import com.WorkTimeSchedule.project.module.employee.dto.TaskDto;
import com.WorkTimeSchedule.project.module.employee.entity.TaskEntity;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class TaskMapper {

    public static TaskDto map (TaskEntity entity){
        return new TaskDto()
                .setUuid(entity.getUuid())
                .setDate(entity.getTaskDate().toString())
                .setText(entity.getText());
    }
    public static List<TaskDto> map(List<TaskEntity> entities){
        return entities
                .stream()
                .map(TaskMapper::map)
                .collect(Collectors.toList());
    }
}
