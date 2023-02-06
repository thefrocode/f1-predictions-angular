import { Component, OnInit } from '@angular/core';
import { Points } from '@f1-predictions-angular/shared/data-access/models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store'
import { selectPoints } from '@f1-predictions-angular/results/data-access';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'player-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss'],
})
export class PointsComponent {
  points$: Observable<Points> = this.store.select(selectPoints)

  constructor(private store: Store){

  }
  

}
