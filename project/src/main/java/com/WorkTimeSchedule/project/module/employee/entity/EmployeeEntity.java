package com.WorkTimeSchedule.project.module.employee.entity;

import com.WorkTimeSchedule.project.module.workplace.WorkplaceEntity;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.util.UUID;

@Entity
@Table(name = "employee")
@Getter
@Setter
@Accessors(chain = true)
public class EmployeeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String uuid = UUID.randomUUID().toString();
    private String name;
    private String surname;
    private Long pesel;
    private Long salary;

    @Enumerated(EnumType.STRING)
    private GenderEnum gender;

    @Enumerated(EnumType.STRING)
    private PositionEnum position;

    @ManyToOne
    @JoinColumn(name = "workplace_id",referencedColumnName = "id")
    private WorkplaceEntity workplace;
}
