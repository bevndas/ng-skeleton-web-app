import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@sharedmodule/shared.module';

import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AuthenticationRoutingModule} from './authentication-routing.module';

@NgModule({
  declarations:  [LoginComponent, RegisterComponent],
  imports: [CommonModule, SharedModule, AuthenticationRoutingModule]
})
export class AuthenticationModule {}
