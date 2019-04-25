import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  private URL;

  constructor(private http: HttpClient) {
    this.URL = `${environment.apiHost}/api/animais`;
  }

  listarAnimais() {
    return this.http.get<any>(this.URL);
  }

  listarRacas() {
    return this.http.get<any>(`${environment.apiHost}/api/racas`);
  }

  buscarPeloCodigo(codigo) {
    return this.http.get<any>(`${this.URL}/${codigo}`);
  }

  cadastrar(animal) {
    return this.http.post<any>(this.URL, animal);
  }
}
