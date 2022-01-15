import { FirmState } from "../store/firm/firm.reducer";
import { OptionsState } from "../store/options/options.reducer";
import { SchedulesState } from "../store/schedules/schedules.reducer";

export interface AppState {
    firm: FirmState;
    options: OptionsState;
    schedules: SchedulesState;
}