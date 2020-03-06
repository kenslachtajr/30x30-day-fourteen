import { Injectable } from '@angular/core';
import { Action, select, Store, ActionsSubject } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import * as fromPhones from './phones.reducer';
import * as phonesActions from './phones.actions';
import * as phonesSelectors from './phones.selectors';
import { Phone } from '@ngrx-phones/core-data';

@Injectable({
  providedIn: 'root'
})
export class PhonesFacade {
  allPhones$ = this.store.pipe(select(phonesSelectors.selectAllPhones));
  selectedPhone$ = this.store.pipe(select(phonesSelectors.selectPhone));
  phoneLoading$ = this.store.pipe(select(phonesSelectors.selectPhonesLoading));
  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type === phonesActions.createPhone({} as any).type ||
        action.type === phonesActions.updatePhone({} as any).type ||
        action.type === phonesActions.deletePhone({} as any).type
    )
  );

  constructor(
    private actions$: ActionsSubject,
    private store: Store<fromPhones.PhonesPartialState>
  ) {}

  selectPhone(selectedPhoneId: string | number) {
    this.dispatch(phonesActions.phoneSelected({ selectedPhoneId }));
  }

  loadPhones() {
    this.dispatch(phonesActions.loadPhones());
  }

  loadPhone(phoneId: string) {
    this.dispatch(phonesActions.loadPhone({ phoneId }));
  }

  createPhone(phone: Phone) {
    this.dispatch(phonesActions.createPhone({ phone }));
  }

  updatePhone(phone: Phone) {
    this.dispatch(phonesActions.updatePhone({ phone }));
  }

  deletePhone(phone: Phone) {
    this.dispatch(phonesActions.deletePhone({ phone }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
