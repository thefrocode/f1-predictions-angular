import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredictionsFormComponent } from './predictions-form/predictions-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [PredictionsFormComponent],
  exports:[PredictionsFormComponent]
})
export class PredictionsFormModule {}
