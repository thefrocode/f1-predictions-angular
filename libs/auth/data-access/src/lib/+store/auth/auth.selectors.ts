import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FEATURE_KEY, AuthState, authAdapter } from './auth.reducer';

// Lookup the 'Auth' feature state managed by NgRx
export const getAuthState =
  createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

const { selectAll, selectEntities } = authAdapter.getSelectors();

export const isAuthenticated = createSelector(
  getAuthState, (state)=>{
      return state.user? true:false
  }
)

export const getToken = createSelector(
  getAuthState, state=>{
     return state.user? state.user.access_token: null
  }
)

export const getUser = createSelector(
  getAuthState, state=>{
    return state.user?state.user: null
  }
)
export const getPlayerId = createSelector(
  getAuthState, state=>{
    return state.user?state.user.player_id: null
  }
)



