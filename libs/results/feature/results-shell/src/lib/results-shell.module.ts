import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointsModule } from '@f1-predictions-angular/results/feature/points';
import { ResultsDataAccessModule } from '@f1-predictions-angular/results/data-access';
import { LeaderboardModule } from '@f1-predictions-angular/results/feature/leaderboard';
import { PredictionsModule } from '@f1-predictions-angular/results/feature/predictions';
import { DriversDataAccessModule } from '@f1-predictions-angular/drivers/data-access';

@NgModule({
  imports: [CommonModule, PointsModule, ResultsDataAccessModule, DriversDataAccessModule],
  exports: [PointsModule, ResultsDataAccessModule, LeaderboardModule, PredictionsModule]
})
export class ResultsShellModule {}
