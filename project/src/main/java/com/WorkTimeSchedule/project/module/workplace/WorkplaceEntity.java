package com.WorkTimeSchedule.project.module.workplace;

import com.WorkTimeSchedule.project.module.employee.entity.EmployeeEntity;
//import com.WorkTimeSchedule.project.module.hall.HallEntity;
import com.WorkTimeSchedule.project.module.employee.entity.PositionEnum;
import com.WorkTimeSchedule.project.module.schedule.ScheduleEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "workplace")
@Getter
@Setter
@Accessors(chain = true)
@NoArgsConstructor
public class WorkplaceEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String uuid;
    private String name;

    @Enumerated(EnumType.STRING)
    private PositionEnum position;

    public WorkplaceEntity(String name, PositionEnum positions) {
        this.uuid = UUID.randomUUID().toString();
        this.name = name;
        this.position = position;
    }
}