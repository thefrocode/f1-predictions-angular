import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromChampionshipRounds from './+store/championship-rounds/championship-rounds.reducer';
import { ChampionshipRoundsEffects } from './+store/championship-rounds/championship-rounds.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromChampionshipRounds.CHAMPIONSHIP_ROUNDS_FEATURE_KEY,
      fromChampionshipRounds.championshipRoundsReducer
    ),
    EffectsModule.forFeature([ChampionshipRoundsEffects]),
  ],
})
export class ChampionshipRoundsDataAccessModule {}
