package com.WorkTimeSchedule.project.module.employee.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.time.LocalDate;
import java.util.UUID;


@Entity
@Table(name = "tasks")
@Getter
@Setter
@Accessors(chain = true)
@NoArgsConstructor
@AllArgsConstructor
public class TaskEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    private EmployeeEntity employee;

    private String uuid;
    private String text;

    @Column(columnDefinition = "DATE")
    private LocalDate taskDate;

    public TaskEntity(EmployeeEntity employee, String text, LocalDate taskDate) {
        this.employee = employee;
        this.text = text;
        this.taskDate = taskDate;
        this.uuid = UUID.randomUUID().toString();
    }
}
