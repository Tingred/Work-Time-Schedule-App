package com.WorkTimeSchedule.project.module.schedule.form;
import com.WorkTimeSchedule.project.module.schedule.dto.WorkplaceScheduleDto;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.util.List;

@Getter
@Setter
@Accessors(chain = true)
public class ScheduleForm {

    private String date;
    private String shiftUuid;
    private List<WorkplaceScheduleForm> workplaces;

}
