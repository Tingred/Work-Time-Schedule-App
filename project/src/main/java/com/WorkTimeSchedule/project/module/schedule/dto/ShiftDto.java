package com.WorkTimeSchedule.project.module.schedule.dto;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.sql.Time;

@Getter
@Setter
@Accessors(chain = true)
public class ShiftDto {

    private String startTime;
    private String finishTime;
    private String uuid;
}
