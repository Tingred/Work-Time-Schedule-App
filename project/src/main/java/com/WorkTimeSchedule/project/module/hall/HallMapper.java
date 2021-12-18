package com.WorkTimeSchedule.project.module.hall;

import com.WorkTimeSchedule.project.module.workplace.WorkplaceMapper;

import java.util.List;
import java.util.stream.Collectors;

public class HallMapper {

    public static HallDto map(HallEntity entity){
        return new HallDto()
                .setName(entity.getName())
                .setUuid(entity.getUuid())
                .setWorkplaces(WorkplaceMapper.map(entity.getWorkplace()));
    }

    public static List<HallDto> map(List<HallEntity> entities){
        return entities.stream()
                .map(HallMapper::map)
                .collect(Collectors.toList());
    }
}
