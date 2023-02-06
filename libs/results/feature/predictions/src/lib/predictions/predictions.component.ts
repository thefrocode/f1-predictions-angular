import { Component, Input, OnInit } from '@angular/core';
import { Driver, Prediction } from '@f1-predictions-angular/shared/data-access/models';
import { Store } from '@ngrx/store';
import {  makePrediction, selectPrediction } from '@f1-predictions-angular/results/data-access';
import { Observable } from 'rxjs';
import { selectAllDrivers } from '@f1-predictions-angular/drivers/data-access';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.scss'],
})
export class PredictionsComponent implements OnInit{
  
  prediction$: Observable<Prediction> = this.store.select(selectPrediction);
  drivers$: Observable<Driver[]> = this.store.select(selectAllDrivers);

  
  constructor(private store: Store) {

  }
  ngOnInit(): void {
    //this.store.dispatch(getPrediction())
    console.log(this.prediction$)
    
  }
  
  onPredictionsChanged(prediction: Prediction) {
    this.store.dispatch(makePrediction({ prediction }	))
  }
}
