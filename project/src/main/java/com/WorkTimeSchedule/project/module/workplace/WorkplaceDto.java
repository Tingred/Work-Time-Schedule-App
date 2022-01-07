package com.WorkTimeSchedule.project.module.workplace;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

@Getter
@Setter
@Accessors(chain = true)
public class WorkplaceDto {

    private String uuid;
    private String name;
    private String position;
}
