import { Component, OnInit } from '@angular/core';
import { initChampionshipRounds } from '@f1-predictions-angular/championship-rounds/data-access';
import { Store } from '@ngrx/store';
import { initLeaderboard, initPoints, initPrediction } from '@f1-predictions-angular/results/data-access'
import { initDrivers } from '@f1-predictions-angular/drivers/data-access';

@Component({
  selector: 'f1-predictions-angular-home-play',
  templateUrl: './home-play.component.html',
  styleUrls: ['./home-play.component.scss'],
})
export class HomePlayComponent implements OnInit{

  constructor (private store: Store){

  }
  ngOnInit(): void {
    this.store.dispatch(initChampionshipRounds())
    this.store.dispatch(initPoints())
    this.store.dispatch(initPrediction())
    this.store.dispatch(initLeaderboard())
    this.store.dispatch(initDrivers());
    
}
}
