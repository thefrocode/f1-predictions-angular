import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromResults from './+store/results/results.reducer';
import { ResultsEffects } from './+store/results/results.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromResults.RESULTS_FEATURE_KEY,
      fromResults.resultsReducer
    ),
    EffectsModule.forFeature([ResultsEffects]),
  ],
})
export class ResultsDataAccessModule {}
