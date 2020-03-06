import { createAction, props } from '@ngrx/store';
import { Phone } from '@ngrx-phones/core-data';

export const phoneSelected = createAction(
  '[PHONE] Phone Selected',
  props<{ selectedPhoneId: string | number }>()
);

export const loadPhones = createAction('[PHONE] Load Phones');

export const phonesLoaded = createAction(
  '[PHONE] Phones Loaded',
  props<{ phones: Phone[] }>()
);

export const loadPhone = createAction(
  '[PHONE] Load Phone',
  props<{ phone: Phone }>()
);

export const phoneLoaded = createAction(
  '[PHONE] Phone Loaded',
  props<{phone:Phone}>()
);

export const createPhone = createAction(
  '[PHONE] Create Phone',
  props<{phone: Phone}>()
);

export const phoneCreated = createAction(
  '[PHONE] Phone Created',
  props<{ phone: Phone }>()
);

export const updatePhone = createAction(
  '[PHONE] Update Phone',
  props<{ phone: Phone }>()
);

export const phoneUpdated = createAction(
  '[PHONE] Phone Updated',
  props<{ phone: Phone }>()
);

export const deletePhone = createAction(
  '[PHONE] Delete Phone',
  props<{ phone: Phone }>()
);

export const phoneDeleted = createAction(
  '[PHONE] Phone Deleted',
  props<{ phone: Phone }>()
);
