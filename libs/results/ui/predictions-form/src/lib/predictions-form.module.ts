import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredictionsFormComponent } from './predictions-form/predictions-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule,FontAwesomeModule],
  declarations: [PredictionsFormComponent],
  exports:[PredictionsFormComponent]
})
export class PredictionsFormModule {}
