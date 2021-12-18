package com.WorkTimeSchedule.project.module.schedule;

import com.WorkTimeSchedule.project.module.hall.HallDto;
import com.WorkTimeSchedule.project.module.hall.HallForm;
import com.WorkTimeSchedule.project.module.workplace.WorkplaceDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ScheduleForm {

    private String Date;
    private String StartTime;
    private String FinishTime;
    private List<HallDto> halls;

}
