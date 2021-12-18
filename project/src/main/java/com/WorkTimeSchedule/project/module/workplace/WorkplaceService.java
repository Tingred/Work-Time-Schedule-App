package com.WorkTimeSchedule.project.module.workplace;

import com.WorkTimeSchedule.project.module.hall.HallRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class WorkplaceService {

    @Autowired
    private WorkplaceRepository workplaceRepository;

    @Autowired
    private HallRepository hallRepository;

    public WorkplaceEntity create(WorkplaceForm workplace) {
        if (hallRepository.findOneByUuid(workplace.getHallUuid()) != null) {
            return workplaceRepository.saveAndFlush(new WorkplaceEntity(
                    workplace.getName(),
                    hallRepository.findOneByUuid(workplace.getHallUuid())));

        } else throw new EntityNotFoundException("Nie znaleziono takiej hali");
    }

    public List<WorkplaceDto> getAll() {
        return WorkplaceMapper.map(workplaceRepository.findAll());
    }

    public WorkplaceEntity findByUuid(String uuid) {
        return workplaceRepository.findOneByUuid(uuid);
    }

    public void delete(WorkplaceEntity toDelete) {
        workplaceRepository.delete(toDelete);
    }

    public void update(WorkplaceEntity toUpdate) {
        workplaceRepository.saveAndFlush(toUpdate);
    }
}
