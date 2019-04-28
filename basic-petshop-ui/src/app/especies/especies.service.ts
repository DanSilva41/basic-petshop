import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment';
import { Especie } from '../core/models';

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

  buscarPeloCodigo(codigo): Promise<Especie>{
    return this.http.get<any>(`${this.URL}/${codigo}`)
      .toPromise()
      .then(response => response as Especie);
  }

  cadastrar(especie) {
    return this.http.post<any>(this.URL, especie);
  }
}
