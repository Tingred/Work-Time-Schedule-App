package com.WorkTimeSchedule.project.module.employee.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

@Getter
@Setter
@Accessors(chain = true)
public class TaskDto {

    private String uuid;
    private String date;
    private String text;
}
