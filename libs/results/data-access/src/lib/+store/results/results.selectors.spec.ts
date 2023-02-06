
import { Result } from '@f1-predictions-angular/shared/data-access/models';
import {
  resultsAdapter,
  ResultsPartialState,
  initialResultsState,
} from './results.reducer';
import * as ResultsSelectors from './results.selectors';

describe('Results Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getResultsId = (it: Result) => it.round_id;
  const createResultsEntity = (round_id: string, p1 : string) =>
    ({
      round_id,
      p1
    } as unknown as Result);

  let state: ResultsPartialState;

  beforeEach(() => {
    state = {
      results: resultsAdapter.setAll(
        [
          createResultsEntity('PRODUCT-AAA'),
          createResultsEntity('PRODUCT-BBB'),
          createResultsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialResultsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Results Selectors', () => {
    it('selectAllResults() should return the list of Results', () => {
      const results = ResultsSelectors.selectAllResults(state);
      const selId = getResultsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = ResultsSelectors.selectEntity(state) as ResultsEntity;
      const selId = getResultsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectResultsLoaded() should return the current "loaded" status', () => {
      const result = ResultsSelectors.selectResultsLoaded(state);

      expect(result).toBe(true);
    });

    it('selectResultsError() should return the current "error" state', () => {
      const result = ResultsSelectors.selectResultsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
