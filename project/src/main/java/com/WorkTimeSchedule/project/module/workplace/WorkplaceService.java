package com.WorkTimeSchedule.project.module.workplace;

//import com.WorkTimeSchedule.project.module.hall.HallRepository;

import com.WorkTimeSchedule.project.module.employee.entity.PositionEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.persistence.EntityNotFoundException;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

@Service
public class WorkplaceService {

    @Autowired
    private WorkplaceRepository workplaceRepository;

    public WorkplaceDto create(WorkplaceForm workplace) {
        String enumValue = workplace.getPosition().trim().replaceAll(" ","_").toUpperCase();
        return WorkplaceMapper.map(workplaceRepository.saveAndFlush(new WorkplaceEntity(
                workplace.getName()).setPosition(PositionEnum.valueOf(enumValue))));
    }

    public List<WorkplaceDto> getAll() {
        return WorkplaceMapper.map(workplaceRepository.findAll());
    }

    public WorkplaceEntity findByUuid(String uuid) {
        return workplaceRepository.findOneByUuid(uuid);
    }

    public void delete(String uuid) {
        WorkplaceEntity toDelete = workplaceRepository.findOneByUuid(uuid);
        workplaceRepository.delete(toDelete);
    }

    public void update(String uuid, WorkplaceForm form) {
        WorkplaceEntity toUpdate = workplaceRepository.findOneByUuid(uuid);
        toUpdate.setName(form.getName());
        workplaceRepository.saveAndFlush(toUpdate);
    }

    public List<String> getPositions() {
        PositionEnum[] positions = PositionEnum.class.getEnumConstants();
        return Arrays.stream(positions).map(c -> c.toString()).collect(Collectors.toList());
    }
}
