import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as ResultsActions from './results.actions';
import { emptyPrediction, LeaderBoard, Prediction, Result } from  '@f1-predictions-angular/shared/data-access/models'


export const RESULTS_FEATURE_KEY = 'results';

export interface ResultsState extends EntityState<Result> {
  selectedId?: string | number; // which Results record has been selected
  loaded: boolean; // has the Results list been loaded
  error?: string | null; // last known error (if any)
  totalPoints?: number | null,
  roundPoints?: number | null,
  leaderboard?: LeaderBoard[] | null
  prediction: Prediction
}

export interface ResultsPartialState {
  readonly [RESULTS_FEATURE_KEY]: ResultsState;
}

export const resultsAdapter: EntityAdapter<Result> =
  createEntityAdapter<Result>();

export const initialResultsState: ResultsState = resultsAdapter.getInitialState(
  {
    // set initial required properties
    loaded: false,
    prediction: emptyPrediction()
  }
);

const reducer = createReducer(
  initialResultsState,
  on(ResultsActions.initResults, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ResultsActions.loadResultsSuccess, (state, { results }) =>
    resultsAdapter.setAll(results, { ...state, loaded: true })
  ),
  on(ResultsActions.loadResultsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(ResultsActions.loadPointsSuccess,(state, action)=>({
    ...state,
    totalPoints: action.points.totalPoints,
    roundPoints: action.points.roundPoints,
    loaded: true
  })),
  on(ResultsActions.loadLeaderboardSuccess, (state, action)=>({
    ...state,
    leaderboard: action.leaderboard
  })),
  on(...[ResultsActions.getPredictionSuccess,],(state, action)=>({
    ...state,
    prediction: action.prediction
  })),

);

export function resultsReducer(
  state: ResultsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
