import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SocialLoginModule } from '@abacritt/angularx-social-login';
@NgModule({
  imports: [CommonModule, SocialLoginModule],
  declarations: [SigninComponent],
  exports: [SigninComponent],
})
export class SigninModule {}
