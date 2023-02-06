import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as DriversActions from './drivers.actions';
import { DriversEffects } from './drivers.effects';

describe('DriversEffects', () => {
  let actions: Observable<Action>;
  let effects: DriversEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        DriversEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(DriversEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: DriversActions.initDrivers() });

      const expected = hot('-a-|', {
        a: DriversActions.loadDriversSuccess({ drivers: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
