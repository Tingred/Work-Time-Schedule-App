package com.WorkTimeSchedule.project.module.employee.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employee")
@Getter
@Setter
@Accessors(chain = true)
public class EmployeeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String guid;
    private String imie;
    private String nazwisko;
    private Long pesel;
    private Long placa;

    @Enumerated(EnumType.STRING)
    private GenderEnum plec;

    @Enumerated(EnumType.STRING)
    private PositionEnum stanowisko;
}
