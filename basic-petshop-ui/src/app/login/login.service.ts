import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  listar() {
    return this.http.get<any>(`${this.URL}/api/animais`);
  }

  buscarPeloCodigo(codigo) {
    return this.http.get<any>(`${this.URL}/api/animais/${codigo}`);
  }

  cadastrar(animal) {
    return this.http.post<any>(`${this.URL}/api/animais`, animal);
  }
}
