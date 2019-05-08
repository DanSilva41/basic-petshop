import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment';
import { Especie } from '../core/models';
import { Observable } from 'rxjs';

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

  cadastrar(especie): Observable<any> {
    return this.http.post<any>(this.URL, especie);
  }

  atualizar(especie): Promise<Especie> {
    return this.http.put<any>(this.URL, especie)
      .toPromise()
      .then(response => response as Especie );;
  }

  deletar(codigoEspecie: number): Promise<Array<Especie>> {
    return this.http.delete<any>(`${this.URL}/${codigoEspecie}`)
      .toPromise()
      .then(response => response as Array<Especie>);
  }
}
