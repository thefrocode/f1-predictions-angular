import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map, tap } from 'rxjs';
import { AuthApiService } from '@f1-predictions-angular/shared/data-access/f1-predictions-api';
import * as AuthActions from './auth.actions';
import { Router } from '@angular/router';
@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signInUser),
      switchMap((action) =>
        this.authApiService.signIn(action.user).pipe(
          map((user) => {
            console.log('action', action);
            const updatedUser = {
              ...action.user,
              access_token: user.access_token,
              player_id: user.player_id,
            };
            return AuthActions.signInUserSuccess({
              user: updatedUser,
            });
          }),
          catchError((error) => {
            console.error('Error', error);
            return of(AuthActions.signInUserFailure({ error }));
          })
        )
      )
    )
  );
  signinRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.signInUserSuccess),
        tap((action) => {
          this.router.navigate(['/home/play']);
        })
      );
    },
    {
      dispatch: false,
    }
  );
  constructor(private authApiService: AuthApiService, private router: Router) {}
}
