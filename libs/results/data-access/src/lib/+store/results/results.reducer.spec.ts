import { Action } from '@ngrx/store';

import * as ResultsActions from './results.actions';
import { ResultsEntity } from './results.models';
import {
  ResultsState,
  initialResultsState,
  resultsReducer,
} from './results.reducer';

describe('Results Reducer', () => {
  const createResultsEntity = (id: string, name = ''): ResultsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Results actions', () => {
    it('loadResultsSuccess should return the list of known Results', () => {
      const results = [
        createResultsEntity('PRODUCT-AAA'),
        createResultsEntity('PRODUCT-zzz'),
      ];
      const action = ResultsActions.loadResultsSuccess({ results });

      const result: ResultsState = resultsReducer(initialResultsState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = resultsReducer(initialResultsState, action);

      expect(result).toBe(initialResultsState);
    });
  });
});
