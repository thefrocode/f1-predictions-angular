import { Component } from '@angular/core';
import { selectLeaderboard } from '@f1-predictions-angular/results/data-access';
import { LeaderBoard } from '@f1-predictions-angular/shared/data-access/models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent {
  leaderboard$: Observable<LeaderBoard[] | null | undefined>= this.store.select(selectLeaderboard)

  constructor(private store: Store){

  }
}
