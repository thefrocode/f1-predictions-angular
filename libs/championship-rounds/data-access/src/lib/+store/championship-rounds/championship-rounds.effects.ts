import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as ChampionshipRoundsActions from './championship-rounds.actions';
import * as ChampionshipRoundsFeature from './championship-rounds.reducer';
import { ChampionshipRoundApiService } from '@f1-predictions-angular/shared/data-access/f1-predictions-api'

import { switchMap, catchError, of } from 'rxjs';
import { map } from 'rxjs';

@Injectable()
export class ChampionshipRoundsEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChampionshipRoundsActions.initChampionshipRounds),
      switchMap(() => {
        return this.championshipRoundsService.getChampionshipRounds().pipe(
          map((rounds)=>{
            return ChampionshipRoundsActions.loadChampionshipRoundsSuccess({
              championshipRounds: rounds
            })
          })
        )
      }
        
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(
          ChampionshipRoundsActions.loadChampionshipRoundsFailure({ error })
        );
      })
    )
  );

  constructor(private championshipRoundsService: ChampionshipRoundApiService){
  
  }
}
