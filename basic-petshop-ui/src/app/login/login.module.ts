import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';


import { LoginService} from './login.service';
import { AuthComponent } from './auth/auth.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from "@angular/forms";
import { MatSnackBarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    LoginRoutingModule,
    FormsModule,
    MatSnackBarModule
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
