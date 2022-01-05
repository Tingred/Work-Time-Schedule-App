package com.WorkTimeSchedule.project.module.workplace;

//import com.WorkTimeSchedule.project.module.hall.HallRepository;
import com.WorkTimeSchedule.project.module.employee.entity.PositionEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class WorkplaceService {

    @Autowired
    private WorkplaceRepository workplaceRepository;

    public void create(WorkplaceForm workplace) {
        workplaceRepository.saveAndFlush(new WorkplaceEntity(
                workplace.getName(),
                workplace.getPositions()
                        .stream()
                        .map(PositionEnum::fromString)
                        .collect(Collectors.toList())));
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
}
