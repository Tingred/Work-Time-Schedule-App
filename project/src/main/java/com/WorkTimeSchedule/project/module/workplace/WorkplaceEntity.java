package com.WorkTimeSchedule.project.module.workplace;

import com.WorkTimeSchedule.project.module.employee.entity.EmployeeEntity;
import com.WorkTimeSchedule.project.module.hall.HallEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
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
    private Integer id;

    private String uuid;
    private String name;

    @OneToMany(mappedBy = "workplace",cascade = CascadeType.ALL)
    private List<EmployeeEntity> employees;

    @ManyToOne
    @JoinColumn(name = "hall_id",referencedColumnName = "id")
    private HallEntity hall;

    public WorkplaceEntity(String name, HallEntity hall) {
        this.uuid = UUID.randomUUID().toString();
        this.name = name;
        this.hall = hall;
        this.employees = new LinkedList<>();
    }
}