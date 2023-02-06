import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePlayComponent } from './home-play/home-play.component';
import { RouterModule } from '@angular/router';
import { ChampionshipRoundsShellModule } from '@f1-predictions-angular/championship-rounds/feature/championship-rounds-shell';
import { TopbarModule } from '@f1-predictions-angular/shell/ui/topbar';
import { ResultsShellModule } from '@f1-predictions-angular/results/feature/results-shell'
@NgModule({
  imports: [
    CommonModule,
    ChampionshipRoundsShellModule,
    ResultsShellModule,
    TopbarModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePlayComponent,
      },
    ]),
  ],
  declarations: [HomePlayComponent],
})
export class HomePlayModule {}
