import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LeaderboardComponent],
  exports: [LeaderboardComponent]
})
export class LeaderboardModule {}
