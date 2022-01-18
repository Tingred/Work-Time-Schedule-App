package com.WorkTimeSchedule.project.module.schedule.form;
import com.WorkTimeSchedule.project.module.schedule.dto.WorkplaceScheduleDto;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.validation.constraints.NotNull;
import java.util.List;

@Getter
@Setter
@Accessors(chain = true)
public class ScheduleForm {

    @NotNull(message="You have to set date")
    private String date;
    @NotNull(message="No shift uuid here")
    private String shiftUuid;
    @NotNull(message="Put list with workplaces")
    private List<WorkplaceScheduleForm> workplaces;

}
