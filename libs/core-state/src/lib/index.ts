import { ActionReducerMap } from '@ngrx/store';
import * as fromPhones from './phones-ngrx/phones.reducer';
export interface AppState {
  phones: fromPhones.PhonesState;
}

export const reducers: ActionReducerMap<AppState> = {
  phones: fromPhones.reducer
};

export const defaultState: AppState = {
  phones: { ids: [] } as fromPhones.PhonesState
};
