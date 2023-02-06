import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { webShellRoutes } from './web-shell.routes';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { CustomSerializer, appReducer } from '@f1-predictions-angular/shared/data-access/store'
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(webShellRoutes),
    
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    }),],
  exports: [RouterModule]
})
export class WebShellModule {}
