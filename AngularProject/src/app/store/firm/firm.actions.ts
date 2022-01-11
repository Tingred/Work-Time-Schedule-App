import { createAction, props } from '@ngrx/store';
import { Employee } from 'src/app/interfaces/employee';
import { ETask } from 'src/app/interfaces/etask';
import { Workplace } from 'src/app/interfaces/workplace';

/*  Workplace  */
export const getAllWorkplaces = createAction(
    '[WORKPLACE] Get all workplaces',
);

export const getAllWorkplacesSuccess = createAction(
    '[WORKPLACE] Get all workplaces success',
    props<{ workplaces: Array<Workplace> }>()
);

export const getAllWorkplacesFailure = createAction(
    '[WORKPLACE] Get all workplaces failure',
    props<{ message: string }>()
);

export const deleteWorkplace = createAction(
    '[WORKPLACE] Delete workplace',
    props<{ uuid: string }>()
);

export const deleteWorkplaceSuccess = createAction(
    '[WORKPLACE] Delete workplace success',
    props<{ uuid: string }>()
);

export const deleteWorkplaceFailure = createAction(
    '[WORKPLACE] Delete workplace failure',
    props<{ message: string }>()
);

export const addWorkplace = createAction(
    '[WORKPLACE] add workplace',
    props<{ workplace: Workplace }>()
);

export const addWorkplaceSuccess = createAction(
    '[WORKPLACE] add workplace success',
    props<{ workplace: Workplace }>()
);

export const addWorkplaceFailure = createAction(
    '[WORKPLACE] add workplace failure',
    props<{ message: string }>()
);
/*  Employee  */
export const getAllEmployees = createAction(
    '[EMPLOYEE] Get all employees',
);

export const getAllEmployeesSuccess = createAction(
    '[EMPLOYEE] Get all employees success',
    props<{ employees: Array<Employee> }>()
);

export const getAllEmployeesFailure = createAction(
    '[EMPLOYEE] Get all employees failure',
    props<{ message: string }>()
);
/* Tasks  */
export const getAllTasks = createAction(
    '[TASK] Get all tasks',
    props<{ uuid: string }>()
);

export const getAllTasksSuccess = createAction(
    '[TASK] Get all tasks success',
    props<{ tasks: Array<ETask> , uuid: string }>()
);

export const getAllTasksFailure = createAction(
    '[TASK] Get all tasks failure',
    props<{ message: string }>()
);

export const deleteTask = createAction(
    '[TASK] Delete task',
    props<{ uuid: string }>()
);

export const deleteTaskSuccess = createAction(
    '[TASK] Delete task success',
    props<{ uuid: string }>()
);

export const deleteTaskFailure = createAction(
    '[TASK] Delete task failure',
    props<{ message: string }>()
);

export const addTask = createAction(
    '[TASK] add task',
    props<{ task: ETask, uuid:string}>()
);

export const addTaskSuccess = createAction(
    '[TASK] add task success',
    props<{ task: ETask, uuid:string }>()
);

export const addTaskFailure = createAction(
    '[TASK] add task failure',
    props<{ message: string }>()
);