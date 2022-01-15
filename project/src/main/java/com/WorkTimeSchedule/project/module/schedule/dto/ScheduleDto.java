package com.WorkTimeSchedule.project.module.schedule.dto;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.util.List;

@Getter
@Setter
@Accessors(chain = true)
public class ScheduleDto {

    private String date;
    private ShiftDto shift;
    private List<WorkplaceScheduleDto> workplaces;
}
