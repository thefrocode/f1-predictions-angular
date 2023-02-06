import { Action } from '@ngrx/store';

import * as ChampionshipRoundsActions from './championship-rounds.actions';
import { ChampionshipRoundsEntity } from './championship-rounds.models';
import {
  ChampionshipRoundsState,
  initialChampionshipRoundsState,
  championshipRoundsReducer,
} from './championship-rounds.reducer';

describe('ChampionshipRounds Reducer', () => {
  const createChampionshipRoundsEntity = (
    id: string,
    name = ''
  ): ChampionshipRoundsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid ChampionshipRounds actions', () => {
    it('loadChampionshipRoundsSuccess should return the list of known ChampionshipRounds', () => {
      const championshipRounds = [
        createChampionshipRoundsEntity('PRODUCT-AAA'),
        createChampionshipRoundsEntity('PRODUCT-zzz'),
      ];
      const action = ChampionshipRoundsActions.loadChampionshipRoundsSuccess({
        championshipRounds,
      });

      const result: ChampionshipRoundsState = championshipRoundsReducer(
        initialChampionshipRoundsState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = championshipRoundsReducer(
        initialChampionshipRoundsState,
        action
      );

      expect(result).toBe(initialChampionshipRoundsState);
    });
  });
});
