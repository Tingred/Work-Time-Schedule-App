package com.WorkTimeSchedule.project.module.hall;

import com.WorkTimeSchedule.project.module.workplace.WorkplaceDto;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.util.List;

@Getter
@Setter
@Accessors(chain = true)
public class HallDto {

    private String uuid;
    private String name;
    private List<WorkplaceDto> workplaces;
}
