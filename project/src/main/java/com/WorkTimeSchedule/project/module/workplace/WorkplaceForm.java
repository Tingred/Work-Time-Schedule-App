package com.WorkTimeSchedule.project.module.workplace;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
public class WorkplaceForm {

    @NotNull(message="Workplace need name")
    private String name;

    @NotNull(message="Set workplace position")
    private String position;
}
