import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthenticationComponent } from './authentication.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { AuthenticationLinkComponent } from './components/authentication-link/authentication-link.component';
import { AuthenticationTitleComponent } from './components/authentication-title/authentication-title.component';
import { AuthenticationInputUsernameComponent } from './components/authentication-input-username/authentication-input-username.component';
import { AuthenticationInputPasswordComponent } from './components/authentication-input-password/authentication-input-password.component';

@NgModule({
  declarations: [LoginComponent, AuthenticationComponent, RegisterComponent, ForgotPasswordComponent, AuthenticationButtonComponent, AuthenticationLinkComponent, AuthenticationTitleComponent, AuthenticationInputUsernameComponent, AuthenticationInputPasswordComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
