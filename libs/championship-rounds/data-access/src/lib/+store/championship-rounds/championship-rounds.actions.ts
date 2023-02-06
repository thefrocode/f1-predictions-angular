import { ChampionshipRound } from '@f1-predictions-angular/shared/data-access/models';
import { createAction, props } from '@ngrx/store';


export const initChampionshipRounds = createAction(
  '[ChampionshipRounds Page] Init'
);

export const loadChampionshipRoundsSuccess = createAction(
  '[ChampionshipRounds/API] Load ChampionshipRounds Success',
  props<{ championshipRounds: ChampionshipRound[] }>()
);

export const loadChampionshipRoundsFailure = createAction(
  '[ChampionshipRounds/API] Load ChampionshipRounds Failure',
  props<{ error: any }>()
);

export const selectChampionshipRound = createAction(
  '[ChampionshipRounds Page] Select ChampionshipRound',
  props<{ selectedId: number}>()
)
