import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  PHONES_FEATURE_KEY,
  PhonesAdapter,
  PhonesPartialState,
  PhonesState
} from './phones.reducer';
import { stat } from 'fs';

export const selectPhonesState = createFeatureSelector<
  PhonesPartialState,
  PhonesState
>(PHONES_FEATURE_KEY);

const { selectAll, selectEntities } = phonesAdapter.getSelectors();

export const selectPhonesLoading = createSelector(
  selectPhonesState,
  (state: PhonesState) => state.isLoading
);

export const selectAllPhones = createSelector(
  selectPhonesState,
  (state: PhonesState) => selectAll(state)
);

export const selectPhonesEntities = createSelector(
  selectPhonesState,
  (state: PhonesState) => selectEntities(state)
);

export const selectPhoneId = createSelector(
  selectPhonesState,
  (state: PhonesState) => state.selectedPhoneId
);

export const selectPhone = createSelector(
  selectPhoneEntities,
  selectPhoneId,
  (entities, selectedId) => selectedId && entities(selectedId)
);
