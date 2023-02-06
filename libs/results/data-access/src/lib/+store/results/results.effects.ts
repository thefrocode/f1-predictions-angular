import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as ResultsActions from './results.actions';
import * as ResultsFeature from './results.reducer';

import { switchMap, catchError, of, map, withLatestFrom, mergeMap } from 'rxjs';
import { PredictionApiService, ResultApiService } from '@f1-predictions-angular/shared/data-access/f1-predictions-api';
import { selectSelectedRoundId } from '@f1-predictions-angular/championship-rounds/data-access';
import { Store } from '@ngrx/store';

@Injectable()
export class ResultsEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ResultsActions.initResults),
      switchMap(() => of(ResultsActions.loadResultsSuccess({ results: [] }))),
      catchError((error) => {
        console.error('Error', error);
        return of(ResultsActions.loadResultsFailure({ error }));
      })
    )
  );
  initPoints$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ResultsActions.initPoints),
      switchMap(() => {
        return this.resultApiService.getPoints(1, 1).pipe(
          map((points) => {
            return ResultsActions.loadPointsSuccess({
              points: points,
            });
          })
        );
      }),
      catchError((error) => {
        console.error('Error', error);
        return of(ResultsActions.loadPointsFailure({ error }));
      })
    );
  });
  initLeaderboard$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ResultsActions.initLeaderboard),
      switchMap(() => {
        return this.resultApiService.getLeaderboard().pipe(
          map((players) => {
            return ResultsActions.loadLeaderboardSuccess({
              leaderboard: players,
            });
          })
        );
      }),
      catchError((error) => {
        console.error('Error', error);
        return of(ResultsActions.loadPointsFailure({ error }));
      })
    );
  });

  makePredictions$ = createEffect(() => 
    this.actions$.pipe(
      ofType(ResultsActions.makePrediction),
      withLatestFrom(this.store.select(selectSelectedRoundId),
      (action, round) => {
        return { action, round };
      }),
      switchMap((action, round) => {
        const updatedPrediction = {
          ...action.action.prediction,
          round_id: 2,
          player_id: 3
        }
        return this.predictionApiService.makePrediction(updatedPrediction).pipe(
          map((prediction) => {
            return ResultsActions.makePredictionSuccess({
              prediction: prediction,
              message: 'Prediction made successfully',
            });
          })
        );
      } ),
      mergeMap((action) => {
        const dialogRef = this.dialog.open(SuccessDialogComponent, {
          width: '270px',
          height: '160px',
          data: { message: action.message },
          panelClass: 'my-css-class'
        });
        return dialogRef.afterClosed();
      })
    )
  )
  getPrediction$ = createEffect(() => 
    this.actions$.pipe(
      ofType(ResultsActions.initPrediction),
      withLatestFrom(this.store.select(selectSelectedRoundId),
      (action, round) => {
        return { action, round };
      }),
      switchMap((action, round_id) => {
        
        return this.predictionApiService.getPrediction(2,3).pipe(
          map((prediction) => {
            return ResultsActions.getPredictionSuccess({
              prediction: prediction
            });
          })
        );
      } ),
    )
  )

  constructor(private predictionApiService: PredictionApiService,
    private resultApiService: ResultApiService,
    private store: Store, private dialog: MatDialog) {}
}
