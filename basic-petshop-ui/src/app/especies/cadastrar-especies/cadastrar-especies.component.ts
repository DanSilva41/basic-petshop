import {Component, OnInit} from '@angular/core';
import {Especie} from '../../core/models';
import {EspeciesService} from "../especies.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-especies',
  templateUrl: './cadastrar-especies.component.html',
  styleUrls: ['./cadastrar-especies.component.css']
})
export class CadastrarEspeciesComponent implements OnInit {

  especie = new Especie();

  constructor(private especiesService: EspeciesService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    const codigoEspecie = this.route.snapshot.params['codigo'];
    
    if(codigoEspecie) {
      this.especiesService.buscarPeloCodigo(codigoEspecie)
        .then(especieRetornada => {
          this.especie = especieRetornada;
        });
    }
  }

  cadastrar() {
    this.especiesService.cadastrar(this.especie)
      .subscribe(response => {
        console.log('Cadastrada com sucesso!');
        this.router.navigate(['/especies']);
      });
  }
}
