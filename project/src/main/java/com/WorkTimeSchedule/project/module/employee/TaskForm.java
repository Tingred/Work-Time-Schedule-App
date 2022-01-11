package com.WorkTimeSchedule.project.module.employee;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

@Getter
@Setter
@Accessors(chain = true)
public class TaskForm {

    @NotNull
    private String text;
    @NotNull
    private String date;
}
