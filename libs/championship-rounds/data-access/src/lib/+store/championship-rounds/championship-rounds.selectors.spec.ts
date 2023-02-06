import { ChampionshipRoundsEntity } from './championship-rounds.models';
import {
  championshipRoundsAdapter,
  ChampionshipRoundsPartialState,
  initialChampionshipRoundsState,
} from './championship-rounds.reducer';
import * as ChampionshipRoundsSelectors from './championship-rounds.selectors';

describe('ChampionshipRounds Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getChampionshipRoundsId = (it: ChampionshipRoundsEntity) => it.id;
  const createChampionshipRoundsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ChampionshipRoundsEntity);

  let state: ChampionshipRoundsPartialState;

  beforeEach(() => {
    state = {
      championshipRounds: championshipRoundsAdapter.setAll(
        [
          createChampionshipRoundsEntity('PRODUCT-AAA'),
          createChampionshipRoundsEntity('PRODUCT-BBB'),
          createChampionshipRoundsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialChampionshipRoundsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('ChampionshipRounds Selectors', () => {
    it('selectAllChampionshipRounds() should return the list of ChampionshipRounds', () => {
      const results =
        ChampionshipRoundsSelectors.selectAllChampionshipRounds(state);
      const selId = getChampionshipRoundsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = ChampionshipRoundsSelectors.selectEntity(
        state
      ) as ChampionshipRoundsEntity;
      const selId = getChampionshipRoundsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectChampionshipRoundsLoaded() should return the current "loaded" status', () => {
      const result =
        ChampionshipRoundsSelectors.selectChampionshipRoundsLoaded(state);

      expect(result).toBe(true);
    });

    it('selectChampionshipRoundsError() should return the current "error" state', () => {
      const result =
        ChampionshipRoundsSelectors.selectChampionshipRoundsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
