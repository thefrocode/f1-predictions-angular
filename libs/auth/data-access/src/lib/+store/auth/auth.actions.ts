import { User } from '@f1-predictions-angular/shared/data-access/models';
import { createAction, props } from '@ngrx/store';
import { AuthEntity } from './auth.models';
import { SocialUser } from "@abacritt/angularx-social-login";

export const signInUser = createAction('[Users Page] Init',
  props<{ user: SocialUser}>()
);
export const signInUserSuccess = createAction('[Users Page/API] Sign In User Success',
  props<{ user: User}>()
);
export const signInUserFailure = createAction('[Users Page/API] Sign In User Failure',
  props<{ error: any}>()
);
