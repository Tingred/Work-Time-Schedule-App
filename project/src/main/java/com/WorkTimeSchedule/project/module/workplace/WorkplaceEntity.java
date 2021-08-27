package com.WorkTimeSchedule.project.module.workplace;

import com.WorkTimeSchedule.project.module.employee.entity.EmployeeEntity;
import com.WorkTimeSchedule.project.module.hall.HallEntity;
import lombok.Getter;
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
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "workplace")
@Getter
@Setter
@Accessors(chain = true)
public class WorkplaceEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String uuid = UUID.randomUUID().toString();
    private String nazwa;

    @OneToMany(mappedBy = "miejscePracy",cascade = CascadeType.ALL)
    private Set<EmployeeEntity> pracownicy;

    @ManyToOne
    @JoinColumn(name = "hall_id",referencedColumnName = "id")
    private HallEntity hala;
}