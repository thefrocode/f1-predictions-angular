import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CHAMPIONSHIP_ROUNDS_FEATURE_KEY,
  ChampionshipRoundsState,
  championshipRoundsAdapter,
} from './championship-rounds.reducer';

// Lookup the 'ChampionshipRounds' feature state managed by NgRx
export const selectChampionshipRoundsState =
  createFeatureSelector<ChampionshipRoundsState>(
    CHAMPIONSHIP_ROUNDS_FEATURE_KEY
  );

const { selectAll, selectEntities } = championshipRoundsAdapter.getSelectors();

export const selectChampionshipRoundsLoaded = createSelector(
  selectChampionshipRoundsState,
  (state: ChampionshipRoundsState) => state.loaded
);

export const selectChampionshipRoundsError = createSelector(
  selectChampionshipRoundsState,
  (state: ChampionshipRoundsState) => state.error
);

export const selectAllChampionshipRounds = createSelector(
  selectChampionshipRoundsState,
  (state: ChampionshipRoundsState) => selectAll(state)
);

export const selectChampionshipRoundsEntities = createSelector(
  selectChampionshipRoundsState,
  (state: ChampionshipRoundsState) => selectEntities(state)
);

export const selectSelectedRoundId = createSelector(
  selectChampionshipRoundsState,
  (state: ChampionshipRoundsState) => state.selectedId
);

export const selectEntity = createSelector(
  selectChampionshipRoundsEntities,
  selectSelectedRoundId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
