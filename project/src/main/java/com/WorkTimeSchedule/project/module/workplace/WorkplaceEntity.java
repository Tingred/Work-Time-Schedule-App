package com.WorkTimeSchedule.project.module.workplace;
import com.WorkTimeSchedule.project.module.employee.entity.PositionEnum;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
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

    public WorkplaceEntity(String name) {
        this.uuid = UUID.randomUUID().toString();
        this.name = name;
    }
}