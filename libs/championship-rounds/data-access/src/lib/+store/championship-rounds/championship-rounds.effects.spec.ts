import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as ChampionshipRoundsActions from './championship-rounds.actions';
import { ChampionshipRoundsEffects } from './championship-rounds.effects';

describe('ChampionshipRoundsEffects', () => {
  let actions: Observable<Action>;
  let effects: ChampionshipRoundsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ChampionshipRoundsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ChampionshipRoundsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', {
        a: ChampionshipRoundsActions.initChampionshipRounds(),
      });

      const expected = hot('-a-|', {
        a: ChampionshipRoundsActions.loadChampionshipRoundsSuccess({
          championshipRounds: [],
        }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
