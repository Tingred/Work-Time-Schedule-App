package com.WorkTimeSchedule.project.module.schedule.dto;

import com.WorkTimeSchedule.project.module.employee.dto.EmployeeDto;
import com.WorkTimeSchedule.project.module.workplace.WorkplaceDto;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.util.List;

@Getter
@Setter
@Accessors(chain = true)
public class WorkplaceScheduleDto {

    private WorkplaceDto workplace;
    private List<EmployeeDto> employees;
}
