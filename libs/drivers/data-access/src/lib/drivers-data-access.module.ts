import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromDrivers from './+store/drivers/drivers.reducer';
import { DriversEffects } from './+store/drivers/drivers.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromDrivers.DRIVERS_FEATURE_KEY,
      fromDrivers.driversReducer
    ),
    EffectsModule.forFeature([DriversEffects]),
  ],
})
export class DriversDataAccessModule {}
