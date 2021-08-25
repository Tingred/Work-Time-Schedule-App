package com.WorkTimeSchedule.project.module.employee;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

@Getter
@Setter
@Accessors(chain = true)
public class EmployeeDto {

    private String guid;
    private String imie;
    private String nazwisko;
    private String plec;
    private String stanowisko;
}