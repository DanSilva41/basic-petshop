import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  logar(usuario: string, senha: string) {
    return this.http.post<any>(`${this.URL}/api/autenticacao`, usuario);
  }
}
