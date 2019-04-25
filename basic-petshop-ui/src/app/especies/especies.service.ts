import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EspeciesService {

  private URL;

  constructor(private http: HttpClient) {
    this.URL = `${environment.apiHost}/api/especies`;
  }

  listarEspecies() {
    return this.http.get<any>(this.URL);
  }

  buscarPeloCodigo(codigo) {
    return this.http.get<any>(`${this.URL}/${codigo}`);
  }

  cadastrar(especie) {
    return this.http.post<any>(this.URL, especie);
  }
}
