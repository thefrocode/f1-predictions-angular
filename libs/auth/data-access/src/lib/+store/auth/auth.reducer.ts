import { User } from '@f1-predictions-angular/shared/data-access/models';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import { AuthEntity } from './auth.models';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState  {
  user: User | null;
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: AuthState;
}

export const authAdapter: EntityAdapter<User> =
  createEntityAdapter<User>();

export const initialAuthState: AuthState = authAdapter.getInitialState({
  user: null
  
});

const reducer = createReducer(
  initialAuthState,
  on(AuthActions.signInUser, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(AuthActions.signInUserSuccess, (state, { user }) =>
    ({
      ...state,
      user: user,
    })
  ),
  on(AuthActions.signInUserFailure, (state, { error }) => ({ ...state, error }))
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
