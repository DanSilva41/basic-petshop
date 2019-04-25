import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';


import { LoginService} from './login.service';
import { AuthComponent } from './auth/auth.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    LoginRoutingModule
  ],
  exports: [
    AuthComponent
  ],
  declarations: [
    AuthComponent
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule {
}
