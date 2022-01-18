package com.WorkTimeSchedule.project.module.schedule.form;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.validation.constraints.NotNull;
import java.util.List;

@Getter
@Setter
@Accessors(chain = true)
public class WorkplaceScheduleForm {

    @NotNull(message = "No workplace chosen")
    private String workplaceUuid;
    @NotNull(message = "Zero employees chosen")
    private List<String> employeeUuids;
}
