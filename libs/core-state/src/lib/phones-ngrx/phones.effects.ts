import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';

import * as phonesActions from './phones.actions';
import { PhonesFacade } from './phones.facade';
import { Phone, PhoneService, NotifyService } from '@ngrx-phones/core-data';
import { PhonesPartialState } from './phones.reducer';

@Injectable()
export class PhonesEffect {
  loadPhones$ = createEffect(() =>
    this.dataPersistence.fetch(phonesActions.loadPhones, {
      run: (
        action: ReturnType<typeof phonesActions.loadPhones>,
        state: PhonesPartialState
      ) => {
        return this.phoneService
          .all()
          .pipe(
            map((phones: Phone[]) => phonesActions.phonesLoaded({ phones }))
          );
      },
      onError: (action: ReturnType<typeof phonesActions.loadPhones>, error) => {
        this.notify.notification('Effect Error:', error);
      }
    })
  );

  loadPhone$ = createEffect(() =>
    this.dataPersistence.fetch(phonesActions.loadPhone, {
      run: (
        action: ReturnType<typeof phonesActions.loadPhone>,
        state: PhonesPartialState
      ) => {
        return this.phoneService
          .findOne(action.phone)
          .pipe(map((phone: Phone) => phonesActions.phoneLoaded({ phone })));
      },
      onError: (action: ReturnType<typeof phonesActions.loadPhone>, error) => {
        this.notify.notification('Effect Error', error);
      }
    })
  );

  selectPhoneOnLoad$ = createEffect(() =>
    this.dataPersistence.actions.pipe(
      ofType(phonesActions.phoneLoaded),
      map(({ phone }) =>
        phonesActions.phoneSelected({ selectedPhoneId: phone.id })
      )
    )
  );

  createPhone$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(phonesActions.createPhone, {
      run: (
        action: ReturnType<typeof phonesActions.createPhone>,
        state: PhonesPartialState
      ) => {
        return this.phoneService.create(action.phone).pipe(
          map((phone: Phone) => phonesActions.phoneCreated({ phone })),
          tap(() => this.phonesFacade.loadPhones())
        );
      },
      onError: (
        action: ReturnType<typeof phonesActions.createPhone>,
        error
      ) => {
        this.notify.notification('Effect Error:', error);
      }
    })
  );

  updatePhone$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(phonesActions.updatePhone, {
      run: (
        action: ReturnType<typeof phonesActions.updatePhone>,
        state: PhonesPartialState
      ) => {
        return this.phoneService.update(action.phone).pipe(
          map((phone: Phone) => phonesActions.phoneUpdated({ phone })),
          tap(() => this.phoneService.all())
        );
      },
      onError: (
        action: ReturnType<typeof phonesActions.updatePhone>,
        error
      ) => {
        this.notify.notification('Effect Error:', error);
      }
    })
  );

  deletePhone$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(phonesActions.deletePhone, {
      run: (
        action: ReturnType<typeof phonesActions.deletePhone>,
        state: PhonesPartialState
      ) => {
        return this.phoneService
          .delete(action.phone)
          .pipe(map(() => phonesActions.phoneDeleted({ phone: action.phone })));
      },
      onError: (
        action: ReturnType<typeof phonesActions.deletePhone>,
        error
      ) => {
        this.notify.notification('Effect delete Error: ', error);
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<PhonesPartialState>,
    private phoneService: PhoneService,
    private phonesFacade: PhonesFacade,
    private notify: NotifyService
  ) {}
}
