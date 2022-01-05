package com.WorkTimeSchedule.project.module.schedule;

//import com.WorkTimeSchedule.project.module.hall.HallEntity;
//import com.WorkTimeSchedule.project.module.hall.HallMapper;

import java.util.List;
import java.util.stream.Collectors;

public class ScheduleMapper {

    public static ScheduleDto map(ScheduleEntity entity){
        return new ScheduleDto()
                .setDate(entity.getScheduleDate().toString())
                .setStartTime(entity.getStartTime().toString())
                .setFinishTime(entity.getFinishTime().toString())
                .setWorkplaceUuid(entity.getWorkplaceUuid())
                .setEmployeeUuid(entity.getEmployeeUuid());
    }
    public static List<ScheduleDto> map(List<ScheduleEntity> entities){
        return entities
                .stream()
                .map(ScheduleMapper::map)
                .collect(Collectors.toList());
    }
}
