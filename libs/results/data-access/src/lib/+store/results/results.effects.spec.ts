import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as ResultsActions from './results.actions';
import { ResultsEffects } from './results.effects';

describe('ResultsEffects', () => {
  let actions: Observable<Action>;
  let effects: ResultsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ResultsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ResultsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ResultsActions.initResults() });

      const expected = hot('-a-|', {
        a: ResultsActions.loadResultsSuccess({ results: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
