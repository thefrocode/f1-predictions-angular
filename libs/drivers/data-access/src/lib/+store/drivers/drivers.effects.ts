import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as DriversActions from './drivers.actions';
import * as DriversFeature from './drivers.reducer';

import { switchMap, catchError, of, map } from 'rxjs';
import { DriverApiService } from '@f1-predictions-angular/shared/data-access/f1-predictions-api';

@Injectable()
export class DriversEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() => 
    this.actions$.pipe(
      ofType(DriversActions.initDrivers),
      switchMap(() =>
        this.driversApiService.getDrivers().pipe(
          map((drivers) => DriversActions.loadDriversSuccess({ drivers })),
          catchError((error) => {
            console.error('Error', error);
            return of(DriversActions.loadDriversFailure({ error }));
          })
        )
      )
    )
        
  );
  constructor(private driversApiService: DriverApiService) {}
}
