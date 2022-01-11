package com.WorkTimeSchedule.project.module.schedule.form;
import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ShiftForm {

    @NotNull
    private String startTime;
    @NotNull
    private String finishTime;

}
