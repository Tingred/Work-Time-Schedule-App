package com.WorkTimeSchedule.project.module.employee;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

@Getter
@Setter
@Accessors(chain = true)
public class TaskForm {

    private String text;
    private String date;
}
