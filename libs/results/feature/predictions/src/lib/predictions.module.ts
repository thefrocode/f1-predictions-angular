import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredictionsComponent } from './predictions/predictions.component';
import { PredictionsFormModule } from '@f1-predictions-angular/results/ui/predictions-form';

@NgModule({
  imports: [CommonModule, PredictionsFormModule], 
  declarations: [PredictionsComponent],
  exports: [PredictionsComponent],
})
export class PredictionsModule {}
