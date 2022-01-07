package com.WorkTimeSchedule.project.module.workplace;
import java.util.List;
import java.util.stream.Collectors;

public class WorkplaceMapper {

    public static List<WorkplaceDto> map(List<WorkplaceEntity> all) {
        return all.stream()
                .map(WorkplaceMapper::map)
                .collect(Collectors.toList());
    }

    public static WorkplaceDto map(WorkplaceEntity entity){
        return new WorkplaceDto()
                .setName(entity.getName())
                .setUuid(entity.getUuid())
                .setPosition(entity.getPosition().toString());
    }
}
