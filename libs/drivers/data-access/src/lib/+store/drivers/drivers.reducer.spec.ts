import { Action } from '@ngrx/store';

import * as DriversActions from './drivers.actions';
import { DriversEntity } from './drivers.models';
import {
  DriversState,
  initialDriversState,
  driversReducer,
} from './drivers.reducer';

describe('Drivers Reducer', () => {
  const createDriversEntity = (id: string, name = ''): DriversEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Drivers actions', () => {
    it('loadDriversSuccess should return the list of known Drivers', () => {
      const drivers = [
        createDriversEntity('PRODUCT-AAA'),
        createDriversEntity('PRODUCT-zzz'),
      ];
      const action = DriversActions.loadDriversSuccess({ drivers });

      const result: DriversState = driversReducer(initialDriversState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = driversReducer(initialDriversState, action);

      expect(result).toBe(initialDriversState);
    });
  });
});
