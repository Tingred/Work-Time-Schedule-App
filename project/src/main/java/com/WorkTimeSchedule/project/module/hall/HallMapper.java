package com.WorkTimeSchedule.project.module.hall;

import java.util.List;
import java.util.stream.Collectors;

public class HallMapper {

    public static HallDto map(HallEntity entity){
        return new HallDto()
                .setId(entity.getId())
                .setName(entity.getName());
    }

    public static List<HallDto> map(List<HallEntity> entities){
        return entities.stream()
                .map(HallMapper::map)
                .collect(Collectors.toList());
    }
}
