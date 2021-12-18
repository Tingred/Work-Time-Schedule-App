package com.WorkTimeSchedule.project.module.schedule;

import com.WorkTimeSchedule.project.module.hall.HallDto;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.util.List;

@Getter
@Setter
@Accessors(chain = true)
public class ScheduleDto {

    private String Date;
    private String StartTime;
    private String FinishTime;
    private List<HallDto> hall;
}
