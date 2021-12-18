package com.WorkTimeSchedule.project.module.schedule.single;

import com.WorkTimeSchedule.project.module.employee.entity.EmployeeEntity;
import com.WorkTimeSchedule.project.module.hall.HallEntity;
import com.WorkTimeSchedule.project.module.workplace.WorkplaceEntity;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.sql.Time;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "single_schedule")
@Getter
@Setter
@Accessors(chain = true)
public class SingleScheduleEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate date;
    private Time startTime;
    private Time finishTime;

    @OneToMany
    @JoinColumn(name ="hall_id")
    private List<HallEntity> halls;

    @OneToMany
    @JoinColumn(name = "employee_id")
    private List<EmployeeEntity> employees;

    @OneToMany
    @JoinColumn(name = "workplace_id")
    private List<WorkplaceEntity> workplaces;

    public SingleScheduleEntity(LocalDate date, Time startTime, Time finishTime,
                                List<HallEntity> halls,
                                List<EmployeeEntity> employees,
                                List<WorkplaceEntity> workplaces) {
        this.date = date;
        this.startTime = startTime;
        this.finishTime = finishTime;
        this.halls = halls;
        this.employees = employees;
        this.workplaces = workplaces;
    }
}
