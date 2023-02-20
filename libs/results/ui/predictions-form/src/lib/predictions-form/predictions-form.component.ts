import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Store } from '@ngrx/store';
import {
  Driver,
  Prediction,
} from '@f1-predictions-angular/shared/data-access/models';

import { FormBuilder, FormGroup } from '@angular/forms';

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'predictions-form',
  templateUrl: './predictions-form.component.html',
  styleUrls: ['./predictions-form.component.scss'],
})
export class PredictionsFormComponent implements OnInit {
  availableDrivers!: Driver[];
  selectedDrivers: number[] = [];

  predictionsForm!: FormGroup;

  @Input() prediction!: Prediction | null;
  @Input() drivers!: Driver[] | null;
  @Output() submitPrediction = new EventEmitter<Prediction>();

  faPlusCircle = faPlusCircle;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.predictionsForm = this.formBuilder.group({
      p1: [''],
      p2: [''],
      p3: [''],
      p4: [''],
      p5: [''],
      pole_position: [''],
      fastest_lap: [''],
      driver_of_the_day: [''],
      highest_overtakes: [''],
    });
  }
  ngOnChanges(): void {
    if (this.predictionsForm && this.prediction && this.drivers) {
      this.availableDrivers = this.drivers;
      this.predictionsForm.patchValue(this.prediction);
      console.log(this.prediction)
      const { round_id, player_id, ...predictions } = this.prediction;

      for (const prediction in predictions) {
        if (prediction.length == 2 && predictions[prediction] != 0) {
          const position = +prediction.slice(-1) - 1;
          this.updateAvailableDrivers(position, predictions[prediction])
        }
      }
    }
  }
  selectDriver(event: Event, position: number) {
    const driver = (event.target as HTMLInputElement).value;
    if (driver && this.drivers) {
      this.updateAvailableDrivers(position, +driver)
    }
  }
  updateAvailableDrivers(position: number, driver: number) {
    this.selectedDrivers[position] = +driver;
    if(this.drivers){
      this.availableDrivers = this.drivers?.map((driver) => {
        let selectDriver;
        if (this.selectedDrivers.includes(driver.id)) {
          selectDriver = { ...driver, selected: true };
        } else {
          selectDriver = { ...driver, selected: false };
        }
        return selectDriver;
      });
    }
    
  }
  submitForm() {
    this.submitPrediction.emit(this.predictionsForm.value);
  }
}
