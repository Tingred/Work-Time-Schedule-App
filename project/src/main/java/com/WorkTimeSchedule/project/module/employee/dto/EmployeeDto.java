package com.WorkTimeSchedule.project.module.employee.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.util.List;

@Getter
@Setter
@Accessors(chain = true)
public class EmployeeDto {

    private String uuid;
    private String name;
    private String surname;
    private String gender;
    private String position;

}