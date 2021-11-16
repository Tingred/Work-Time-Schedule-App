package com.WorkTimeSchedule.project.module.hall;

import java.util.List;
import java.util.stream.Collectors;

public class HallMapper {

    public static HallDto map(HallEntity entity){
        return new HallDto()
                .setName(entity.getName())
                .setUuid(entity.getUuid());
    }

    public static List<HallDto> map(List<HallEntity> entities){
        return entities.stream()
                .map(HallMapper::map)
                .collect(Collectors.toList());
    }
}
