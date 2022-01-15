import { Shift } from "./shift";
import { WorkplaceSchedule } from "./workplace-shedule-form";

export interface Schedule {
    date: string;
    shift?: Shift;
    shiftUuid?: string;
    workplaces: Array<WorkplaceSchedule>
}
