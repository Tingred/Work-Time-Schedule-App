package com.WorkTimeSchedule.project.module.schedule.mapper;

import com.WorkTimeSchedule.project.module.schedule.dto.ScheduleDto;
import com.WorkTimeSchedule.project.module.schedule.dto.ShiftDto;
import com.WorkTimeSchedule.project.module.schedule.entity.ScheduleEntity;
import com.WorkTimeSchedule.project.module.schedule.entity.ShiftEntity;

import java.util.List;
import java.util.stream.Collectors;

public class ShiftMapper {

    public static ShiftDto map(ShiftEntity entity){
        return new ShiftDto()
                .setStartTime(entity.getStartTime().toString())
                .setFinishTime(entity.getFinishTime().toString())
                .setUuid(entity.getUuid());
    }
    public static List<ShiftDto> map(List<ShiftEntity> entities){
        return entities
                .stream()
                .map(ShiftMapper::map)
                .collect(Collectors.toList());
    }
}
