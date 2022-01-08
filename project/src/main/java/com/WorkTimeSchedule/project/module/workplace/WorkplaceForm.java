package com.WorkTimeSchedule.project.module.workplace;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class WorkplaceForm {

    @NotNull
    private String name;

    @NotNull
    private String position;
}
