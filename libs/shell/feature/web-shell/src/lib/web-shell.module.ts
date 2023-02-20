import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { webShellRoutes } from './web-shell.routes';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import {
  CustomSerializer,
  appReducer,
} from '@f1-predictions-angular/shared/data-access/store';
import { MatDialogModule } from '@angular/material/dialog';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { AuthDataAccessModule } from '@f1-predictions-angular/auth/data-access';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(webShellRoutes),
    SocialLoginModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    }),
    MatDialogModule,
    AuthDataAccessModule
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('476799260721-idi0ntt8qn9r6btle741unocliq9b48m.apps.googleusercontent.com'),
          },
        ],
        onError: (err) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
  ],
})
export class WebShellModule {}
