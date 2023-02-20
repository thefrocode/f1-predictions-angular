import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { SocialUser } from "@abacritt/angularx-social-login";
import { Store } from '@ngrx/store';
import { getUser, isAuthenticated, signInUser } from '@f1-predictions-angular/auth/data-access';
import { Observable } from 'rxjs';
import { User } from '@f1-predictions-angular/shared/data-access/models';
@Component({
  selector: 'f1-predictions-angular-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit{
  user$: Observable<User | null> = this.store.select(getUser)
  isAuthenticated = this.store.select(isAuthenticated)
  //loggedIn= (this.user != null);

  constructor(private authService: SocialAuthService, private store: Store) { }
  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      console.log(user)
      if(user){
        this.store.dispatch(signInUser({ user }))
      }
      
    });
    
  }
  

  signIn(): void {
    //this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
  refreshToken(): void {
    //this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
}
