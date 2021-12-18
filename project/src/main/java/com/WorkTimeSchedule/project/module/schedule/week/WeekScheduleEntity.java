package com.WorkTimeSchedule.project.module.schedule.week;

import com.WorkTimeSchedule.project.module.schedule.single.SingleScheduleEntity;
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
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "week_schedule")
@Getter
@Setter
@Accessors(chain = true)
public class WeekScheduleEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate startDayDate;
    private LocalDate finishDayDate;

    @OneToMany
    @JoinColumn(name = "single_schedule_id")
    private List<SingleScheduleEntity> listOfSchedules;


}
