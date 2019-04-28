import { Component, OnInit } from '@angular/core';
import {AnimaisService} from '../animais.service';
import {Animal, Especie} from '../../core/models';
import { Router, ActivatedRoute } from '@angular/router';
import { EspeciesService } from 'src/app/especies/especies.service';

@Component({
  selector: 'app-cadastrar-animais',
  templateUrl: './cadastrar-animais.component.html',
  styleUrls: ['./cadastrar-animais.component.css']
})
export class CadastrarAnimaisComponent implements OnInit {

  animal = new Animal();
  especies: Array<Especie>;
  sexoAnimal = [{value: 'FEMEA', label: 'FÊMEA'}, {value: 'MACHO', label: 'MACHO'}];

  constructor(private animaisService: AnimaisService,
              private especiesService: EspeciesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const codigoAnimal = this.route.snapshot.params['codigo'];
    
    if(codigoAnimal) {
      this.animaisService.buscarPeloCodigo(codigoAnimal)
        .then(animalRetornado => {
          this.animal = animalRetornado;
        });
    }
    this.listarEspecies();
  }

  cadastrar() {
    this.animaisService.cadastrar(this.animal)
      .subscribe(response => {
        console.log('Cadastrado com sucesso!');
        this.router.navigate(['/animais']);
      });
  }

  private listarEspecies() {
    this.especiesService.listarEspecies()
      .subscribe(response => {
        this.especies = response;
      });
  }
}
