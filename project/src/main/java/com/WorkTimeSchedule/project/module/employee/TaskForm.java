package com.WorkTimeSchedule.project.module.employee;


import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
@Setter
@Accessors(chain = true)
public class TaskForm {

    @NotNull(message = "Task need value")
    @Size(min = 1,max = 255, message = "Wrong message length")
    private String text;
    @NotNull(message = "Task need a date")
    private String date;
}
