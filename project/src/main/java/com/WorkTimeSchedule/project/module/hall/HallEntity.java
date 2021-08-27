package com.WorkTimeSchedule.project.module.hall;

import com.WorkTimeSchedule.project.module.workplace.WorkplaceEntity;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.Set;

@Entity
@Table(name = "hall")
@Getter
@Setter
@Accessors(chain = true)
public class HallEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nazwa;

    @OneToMany(mappedBy = "hala",cascade = CascadeType.ALL)
    private Set<WorkplaceEntity> miejscePracy;
}
