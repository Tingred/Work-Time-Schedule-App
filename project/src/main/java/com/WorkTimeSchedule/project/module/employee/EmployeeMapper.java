package com.WorkTimeSchedule.project.module.employee;

import java.util.List;
import java.util.stream.Collectors;

public class EmployeeMapper {

    public static EmployeeDto map(EmployeeEntity entity){
        return new EmployeeDto()
                .setGuid(entity.getGuid())
                .setImie(entity.getImie())
                .setNazwisko(entity.getNazwisko())
                .setPlec(entity.getPlec())
                .setStanowisko(entity.getStanowisko());
    }

    public static List<EmployeeDto> map(List<EmployeeEntity> entities){
        return entities.stream()
                .map(EmployeeMapper::map)
                .collect(Collectors.toList());
    }

}
