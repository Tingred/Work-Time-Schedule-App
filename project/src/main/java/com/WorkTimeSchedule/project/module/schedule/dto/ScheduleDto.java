package com.WorkTimeSchedule.project.module.schedule.dto;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

@Getter
@Setter
@Accessors(chain = true)
public class ScheduleDto {

    private String date;
    private ShiftDto shift;
    private String workplaceUuid;
    private String employeeUuid;
}
