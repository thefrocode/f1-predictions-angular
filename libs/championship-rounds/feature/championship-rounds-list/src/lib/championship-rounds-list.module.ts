import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionshipRoundsListComponent } from './championship-rounds-list/championship-rounds-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ChampionshipRoundsListComponent],
  exports: [ChampionshipRoundsListComponent]
})
export class ChampionshipRoundsListModule {}
