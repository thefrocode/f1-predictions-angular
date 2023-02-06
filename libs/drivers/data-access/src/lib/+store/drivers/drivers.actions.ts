import { Driver } from '@f1-predictions-angular/shared/data-access/models';
import { createAction, props } from '@ngrx/store';

export const initDrivers = createAction('[Drivers Page] Init');

export const loadDriversSuccess = createAction(
  '[Drivers/API] Load Drivers Success',
  props<{ drivers: Driver[] }>()
);

export const loadDriversFailure = createAction(
  '[Drivers/API] Load Drivers Failure',
  props<{ error: any }>()
);
