import { state } from '@angular/animations';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  RESULTS_FEATURE_KEY,
  ResultsState,
  resultsAdapter,
} from './results.reducer';

// Lookup the 'Results' feature state managed by NgRx
export const selectResultsState =
  createFeatureSelector<ResultsState>(RESULTS_FEATURE_KEY);

const { selectAll, selectEntities } = resultsAdapter.getSelectors();

export const selectResultsLoaded = createSelector(
  selectResultsState,
  (state: ResultsState) => state.loaded
);

export const selectResultsError = createSelector(
  selectResultsState,
  (state: ResultsState) => state.error
);

export const selectAllResults = createSelector(
  selectResultsState,
  (state: ResultsState) => selectAll(state)
);

export const selectResultsEntities = createSelector(
  selectResultsState,
  (state: ResultsState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectResultsState,
  (state: ResultsState) => state.selectedId
);

export const selectEntity = createSelector(
  selectResultsEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);

export const selectPoints = createSelector(
  selectResultsState,
  (state: ResultsState) => ({
    totalPoints: state.totalPoints,
    roundPoints: state.roundPoints
  })
)

export const selectLeaderboard = createSelector(
  selectResultsState,
  (state: ResultsState)=> state.leaderboard
)

export const selectPrediction = createSelector(
  selectResultsState,
  (state: ResultsState)=> state.prediction
)
