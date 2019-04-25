import {Component, OnInit} from '@angular/core';
import {Especie} from '../../core/models';
import {EspeciesService} from "../especies.service";

@Component({
  selector: 'app-cadastrar-especies',
  templateUrl: './cadastrar-especies.component.html',
  styleUrls: ['./cadastrar-especies.component.css']
})
export class CadastrarEspeciesComponent implements OnInit {

  especie = new Especie();

  constructor(private especiesService: EspeciesService) {
  }

  ngOnInit() {
  }

  cadastrar() {
    this.especiesService.cadastrar(this.especie)
      .subscribe(response => {
        console.log('Cadastrado com sucesso!');
      });
  }
}
