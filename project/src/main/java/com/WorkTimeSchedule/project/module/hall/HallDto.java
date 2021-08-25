package com.WorkTimeSchedule.project.module.hall;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

@Getter
@Setter
@Accessors(chain = true)
public class HallDto {

    private Integer id;
    private String name;
}
