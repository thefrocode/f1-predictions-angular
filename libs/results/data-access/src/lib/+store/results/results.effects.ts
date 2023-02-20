import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as ResultsActions from './results.actions';
import * as ResultsFeature from './results.reducer';

import { switchMap, catchError, of, map, withLatestFrom, mergeMap } from 'rxjs';
import { PredictionApiService, ResultApiService } from '@f1-predictions-angular/shared/data-access/f1-predictions-api';
import { selectSelectedRoundId } from '@f1-predictions-angular/championship-rounds/data-access';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from '@f1-predictions-angular/shared/ui/dialogs/success-dialog'
import { getPlayerId } from '@f1-predictions-angular/auth/data-access';
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
      withLatestFrom(this.store.select(getPlayerId),
      (action, player_id) => {
        return { action, player_id };
      }),
      switchMap((action) => {
        return this.resultApiService.getPoints(1, action.player_id).pipe(
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
      withLatestFrom(this.store.select(getPlayerId),
      (action, player_id) => {
        return { action, player_id };
      }),
      switchMap((action) => {
        const updatedPrediction = {
          ...action.action.action.prediction,
          round_id: 2,
          player_id: action.player_id
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
    ),{
      dispatch: false
    }
  )
  getPrediction$ = createEffect(() => 
    this.actions$.pipe(
      ofType(ResultsActions.initPrediction),
      withLatestFrom(this.store.select(selectSelectedRoundId),
      (action, round) => {
        return { action, round };
      }),
      withLatestFrom(this.store.select(getPlayerId),
      (action, player_id) => {
        return { action, player_id };
      }),
      switchMap((action) => {
        
        return this.predictionApiService.getPrediction(2,action.player_id).pipe(
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
