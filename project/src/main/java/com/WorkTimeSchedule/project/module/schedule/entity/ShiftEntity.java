package com.WorkTimeSchedule.project.module.schedule.entity;

import com.WorkTimeSchedule.project.module.schedule.entity.ScheduleEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.sql.Time;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "shift")
@Getter
@Setter
@Accessors(chain = true)
@NoArgsConstructor
@AllArgsConstructor
public class ShiftEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String uuid;
    private Time startTime;
    private Time finishTime;

    @OneToMany(mappedBy = "shift",cascade = CascadeType.ALL)
    private List<ScheduleEntity> schedules = new ArrayList<>();

    public ShiftEntity(Time start, Time finish) {
        this.uuid = UUID.randomUUID().toString();
        this.startTime = start;
        this.finishTime = finish;
    }
}
