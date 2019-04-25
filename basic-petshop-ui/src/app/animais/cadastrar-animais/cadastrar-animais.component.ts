import { Component, OnInit } from '@angular/core';
import {AnimaisService} from '../animais.service';
import {Animal} from '../../core/models';

@Component({
  selector: 'app-cadastrar-animais',
  templateUrl: './cadastrar-animais.component.html',
  styleUrls: ['./cadastrar-animais.component.css']
})
export class CadastrarAnimaisComponent implements OnInit {

  sexoAnimal = [{value: 'FEMEA', label: 'FÊMEA'}, {value: 'MACHO', label: 'MACHO'}];

  animal = new Animal();

  racas: Array<any>;

  constructor(private animaisService: AnimaisService) { }

  ngOnInit() {
    this.listarRacas();
  }

  cadastrar() {
    this.animaisService.cadastrar(this.animal)
      .subscribe(response => {
        console.log('Cadastrado com sucesso!');
      });
  }

  private listarRacas() {
    this.animaisService.listarRacas()
      .subscribe(response => {
        this.racas = response;
      });
  }
}
