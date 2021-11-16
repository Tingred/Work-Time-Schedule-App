package com.WorkTimeSchedule.project.module.hall;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

@Getter
@Setter
@Accessors(chain = true)
public class HallDto {

    private String uuid;
    private String name;
}
