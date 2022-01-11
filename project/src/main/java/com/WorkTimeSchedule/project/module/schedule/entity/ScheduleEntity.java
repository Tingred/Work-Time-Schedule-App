package com.WorkTimeSchedule.project.module.schedule.entity;

//import com.WorkTimeSchedule.project.module.hall.HallEntity;
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
        import javax.persistence.ManyToOne;
        import javax.persistence.Table;
        import java.time.LocalDate;

@Entity
@Table(name = "schedule")
@Getter
@Setter
@Accessors(chain = true)
@NoArgsConstructor
@AllArgsConstructor
public class ScheduleEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "DATE")
    private LocalDate scheduleDate;

    private String workplaceUuid;
    private String employeeUuid;

    @ManyToOne(fetch = FetchType.LAZY)
    private ShiftEntity shift;
}
