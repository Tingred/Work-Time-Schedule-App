package com.WorkTimeSchedule.project.module.schedule.mapper;
import com.WorkTimeSchedule.project.module.schedule.dto.ScheduleDto;
import com.WorkTimeSchedule.project.module.schedule.entity.ScheduleEntity;
import com.WorkTimeSchedule.project.module.schedule.entity.ShiftEntity;


public class ScheduleMapper {

    public static ScheduleDto map(ScheduleEntity entity, ShiftEntity shift){
        return new ScheduleDto()
                .setDate(entity.getScheduleDate().toString())
                .setWorkplaceUuid(entity.getWorkplaceUuid())
                .setEmployeeUuid(entity.getEmployeeUuid())
                .setShift(ShiftMapper.map(shift));
    }
}
