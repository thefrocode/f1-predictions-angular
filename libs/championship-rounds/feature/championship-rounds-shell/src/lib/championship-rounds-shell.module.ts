import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { ChampionshipRoundsListModule } from '@f1-predictions-angular/championship-rounds/feature/championship-rounds-list'
import { ChampionshipRoundsDataAccessModule } from '@f1-predictions-angular/championship-rounds/data-access';

@NgModule({
  imports: [CommonModule,ChampionshipRoundsListModule,
    ChampionshipRoundsDataAccessModule
  ],
  exports:[ChampionshipRoundsListModule, ChampionshipRoundsDataAccessModule]
})
export class ChampionshipRoundsShellModule {}
