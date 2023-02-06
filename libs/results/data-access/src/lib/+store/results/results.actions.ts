import { LeaderBoard, Points, Prediction, Result } from '@f1-predictions-angular/shared/data-access/models';
import { createAction, props } from '@ngrx/store';

export const initResults = createAction('[Results Page] Init');

export const loadResultsSuccess = createAction(
  '[Results/API] Load Results Success',
  props<{ results: Result[] }>()
);

export const loadResultsFailure = createAction(
  '[Results/API] Load Results Failure',
  props<{ error: any }>()
);

export const initPoints = createAction('[Results Page] Init Points');

export const loadPointsSuccess = createAction(
  '[Results/API] Load Points Success',
  props<{ points: Points}>()
);
export const loadPointsFailure = createAction(
  '[Results/API] Load Points Failure',
  props<{error: any}>()
);

export const initLeaderboard = createAction(
  '[Results Page] Init Leaderboard')

export const loadLeaderboardSuccess = createAction(
  '[Results/API] Load Leaderboard Success',
  props<{leaderboard: LeaderBoard[]}>()
)
export const loadLeaderboardFailure = createAction(
  '[Results/API] Load Leaderboard Failure',
  props<{error: any}>()
)

export const makePrediction = createAction(
  '[Predictions Page] Make Prediction',
  props<{prediction: Prediction}>()
)
export const makePredictionSuccess = createAction(
  '[Predictions/API] Make Prediction Success',
  props<{prediction: Prediction, message: string}>()
)
export const makePredictionFailure = createAction(
  '[Predictions/API] Make Prediction Failure',
  props<{error: any}>()
)
export const initPrediction = createAction(
  '[Predictions Page] Get Prediction'
)
export const getPredictionSuccess = createAction(
  '[Predictions/API] Get Prediction Success',
  props<{prediction: Prediction}>()
)
export const getPredictionFailure = createAction(
  '[Predictions/API] Get Prediction Failure',
  props<{error: any}>()
)