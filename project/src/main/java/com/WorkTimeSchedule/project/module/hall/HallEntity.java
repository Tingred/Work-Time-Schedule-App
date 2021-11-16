package com.WorkTimeSchedule.project.module.hall;

import com.WorkTimeSchedule.project.module.workplace.WorkplaceEntity;
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
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "hall")
@Getter
@Setter
@Accessors(chain = true)
@NoArgsConstructor
public class HallEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    private String uuid;
    private String name;

    @OneToMany(mappedBy = "hall",cascade = CascadeType.ALL)
    private Set<WorkplaceEntity> workplace;

    public HallEntity(String name) {
        this.uuid = UUID.randomUUID().toString();
        this.name = name;
    }
}
