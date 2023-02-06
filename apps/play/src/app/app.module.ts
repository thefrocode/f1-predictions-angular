import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebShellModule } from '@f1-predictions-angular/shell/feature/web-shell';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { environment } from '../environments/environment';
import { getAppConfigProvider } from '@f1-predictions-angular/shared/app-config';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, WebShellModule, HttpClientModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),],
  providers: [
    getAppConfigProvider(environment),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
