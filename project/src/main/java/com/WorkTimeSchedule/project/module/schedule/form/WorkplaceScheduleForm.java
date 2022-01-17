package com.WorkTimeSchedule.project.module.schedule.form;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.util.List;

@Getter
@Setter
@Accessors(chain = true)
public class WorkplaceScheduleForm {

    private String workplaceUuid;
    private List<String> employeeUuids;
}
