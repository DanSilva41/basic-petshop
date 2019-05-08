import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private snackBar: MatSnackBar) {}

  mensagemAlerta(chaveMensagem: string) {
     this.mensagemSucesso(chaveMensagem);
  }

  mensagemSucesso(chaveMensagem: string) {
    this.snackBar.open(chaveMensagem, 'X', {
      duration: 10000
    });
  }
}