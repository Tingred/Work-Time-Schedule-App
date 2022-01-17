import { FirmState } from "../store/firm/firm.reducer";
import { OptionsState } from "../store/options/options.reducer";
import { SchedulesState } from "../store/schedules/schedules.reducer";
import { AuthState } from "../store/auth/auth.reducer";

export interface AppState {
    auth: AuthState;
    firm: FirmState;
    options: OptionsState;
    schedules: SchedulesState;
}