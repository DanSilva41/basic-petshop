import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  usuario: string;
  senha: string;

  constructor() { }

  ngOnInit() {
  }

}
