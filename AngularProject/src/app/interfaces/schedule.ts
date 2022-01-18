import { Employee } from "./employee";
import { Shift } from "./shift";
import { Workplace } from "./workplace";
import { WorkplaceSchedule } from "./workplace-shedule-form";

export interface Schedule {
    date: string;
    shift?: Shift;
    shiftUuid?: string;
}

export interface ScheduleRequest extends Schedule {
    workplaces: Array<WorkplaceSchedule>;
}

export interface ScheduleResponse extends Schedule {
    workplaces: Array<{
        workplace: Workplace;
        employees: Array<Employee>;
    }>;
}