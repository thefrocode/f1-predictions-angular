import { ChampionshipRound } from '@f1-predictions-angular/shared/data-access/models';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as ChampionshipRoundsActions from './championship-rounds.actions';


export const CHAMPIONSHIP_ROUNDS_FEATURE_KEY = 'championshipRounds';

export interface ChampionshipRoundsState
  extends EntityState<ChampionshipRound> {
  selectedId: number | null; // which ChampionshipRounds record has been selected
  loaded: boolean; // has the ChampionshipRounds list been loaded
  error?: string | null; // last known error (if any)
}

export interface ChampionshipRoundsPartialState {
  readonly [CHAMPIONSHIP_ROUNDS_FEATURE_KEY]: ChampionshipRoundsState;
}

export const championshipRoundsAdapter: EntityAdapter<ChampionshipRound> =
  createEntityAdapter<ChampionshipRound>();

export const initialChampionshipRoundsState: ChampionshipRoundsState =
  championshipRoundsAdapter.getInitialState({
    // set initial required properties
    loaded: false,
    selectedId: null
  });

const reducer = createReducer(
  initialChampionshipRoundsState,
  on(ChampionshipRoundsActions.initChampionshipRounds, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    ChampionshipRoundsActions.loadChampionshipRoundsSuccess,
    (state, { championshipRounds }) =>
      championshipRoundsAdapter.setAll(championshipRounds, {
        ...state,
        loaded: true,
      })
  ),
  on(
    ChampionshipRoundsActions.loadChampionshipRoundsFailure,
    (state, { error }) => ({ ...state, error })
  ),
  on(
    ChampionshipRoundsActions.selectChampionshipRound,
    (state, { selectedId }) => ({...state, selectedId:selectedId})
  )
);

export function championshipRoundsReducer(
  state: ChampionshipRoundsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
