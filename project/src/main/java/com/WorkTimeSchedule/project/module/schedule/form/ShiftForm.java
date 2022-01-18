package com.WorkTimeSchedule.project.module.schedule.form;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;
import javax.validation.constraints.NotNull;
import java.util.List;

@Getter
@Setter
@Accessors(chain = true)
public class ShiftForm {

    @NotNull(message="You have to set start time")
    private String startTime;
    @NotNull(message="You have to set finish time")
    private String finishTime;

}
