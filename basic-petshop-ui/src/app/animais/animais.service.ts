import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Animal } from '../core/models';

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

  buscarPeloCodigo(codigo): Promise<Animal> {
    return this.http.get<any>(`${this.URL}/${codigo}`)
      .toPromise()
      .then(response => response as Animal);
  }

  cadastrar(animal) {
    return this.http.post<any>(this.URL, animal);
  }
}
