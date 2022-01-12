import { FirmState } from "../store/firm/firm.reducer";
import { OptionsState } from "../store/options/options.reducer";

export interface AppState {
    firm: FirmState;
    options: OptionsState;
}