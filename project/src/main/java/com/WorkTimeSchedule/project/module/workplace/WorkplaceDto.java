package com.WorkTimeSchedule.project.module.workplace;

import com.WorkTimeSchedule.project.module.employee.EmployeeDto;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.util.List;

@Getter
@Setter
@Accessors(chain = true)
public class WorkplaceDto {

    private String uuid;
    private String name;
    private List<EmployeeDto>  employees;
}
