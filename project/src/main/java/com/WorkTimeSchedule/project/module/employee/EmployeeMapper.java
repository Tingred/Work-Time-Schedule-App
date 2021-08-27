package com.WorkTimeSchedule.project.module.employee;

import com.WorkTimeSchedule.project.module.employee.entity.EmployeeEntity;

import java.util.List;
import java.util.stream.Collectors;

public class EmployeeMapper {

    public static EmployeeDto map(EmployeeEntity entity){
        return new EmployeeDto()
                .setGuid(entity.getUuid())
                .setImie(entity.getImie())
                .setNazwisko(entity.getNazwisko())
                .setPlec(entity.getPlec().toString())
                .setStanowisko(entity.getStanowisko().toString());
    }

    public static List<EmployeeDto> map(List<EmployeeEntity> entities){
        return entities.stream()
                .map(EmployeeMapper::map)
                .collect(Collectors.toList());
    }
}
