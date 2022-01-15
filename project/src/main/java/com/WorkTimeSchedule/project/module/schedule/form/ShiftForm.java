package com.WorkTimeSchedule.project.module.schedule.form;
import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

@Getter
@Setter
@Accessors(chain = true)
public class ShiftForm {

    @NotNull
    private String startTime;
    @NotNull
    private String finishTime;

}
