import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

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

  public listarAnimais() {
    return this.http.get<any>(this.URL);
  }

  public buscarPeloCodigo(codigo): Promise<Animal> {
    return this.http.get<any>(`${this.URL}/${codigo}`)
      .toPromise()
      .then(response => response as Animal);
  }

  public cadastrar(animal: Animal): Promise<Animal> {
    return this.http.post<any>(this.URL, animal)
      .toPromise();
  }

  public atualizar(animal: Animal): Promise<Animal> {
    return this.http.put<any>(this.URL, animal)
      .toPromise()
      .then(response => response as Animal );
  }

  public deletar(codigoAnimal: number): Promise<Array<Animal>> {
    return this.http.delete<any>(`${this.URL}/${codigoAnimal}`)
      .toPromise()
      .then(response => response as Array<Animal>);
  }


}
