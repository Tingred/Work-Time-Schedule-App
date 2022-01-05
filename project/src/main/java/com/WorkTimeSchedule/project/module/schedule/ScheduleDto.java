package com.WorkTimeSchedule.project.module.schedule;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

@Getter
@Setter
@Accessors(chain = true)
public class ScheduleDto {

    private String Date;
    private String StartTime;
    private String FinishTime;
    private String workplaceUuid;
    private String employeeUuid;
}
