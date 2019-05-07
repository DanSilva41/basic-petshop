import {Component, OnInit} from '@angular/core';
import {Especie} from '../../core/models';
import {EspeciesService} from "../especies.service";
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/shared/message/message.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cadastrar-especies',
  templateUrl: './cadastrar-especies.component.html',
  styleUrls: ['./cadastrar-especies.component.css']
})
export class CadastrarEspeciesComponent implements OnInit {

  private especie = new Especie();
  private isEdicao: boolean;
  private tituloPagina: string;

  constructor(private especiesService: EspeciesService,
              private messageService: MessageService,
              private title: Title,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.title.setTitle("Espécies");
    this.tituloPagina = "Cadastrar Espécie";

    const codigoEspecie = this.route.snapshot.params['codigo'];
    
    if(codigoEspecie) {
      this.buscarEspecie(codigoEspecie);
    }
  }

  private buscarEspecie(codigoEspecie: number) {
    this.especiesService.buscarPeloCodigo(codigoEspecie)
        .then(especieRetornada => {
          this.especie = especieRetornada;
          this.isEdicao = true;
          this.tituloPagina = "Edição de Espécie: "+ especieRetornada.nome;
        });
  }

  salvar() {
    if(this.isEdicao) {
      this.atualizarAnimal();
    } else {
      this.cadastrarAnimal();
    }
  }
  private cadastrarAnimal() {
    this.especiesService.cadastrar(this.especie)
      .then(especieCadastrada => {
        this.messageService.mensagemSucesso('Espécie cadastrada com sucesso!');
        this.redirecionarLista();
      });
  }

  private atualizarAnimal() {
    this.especiesService.atualizar(this.especie)
      .then(especieAtualizada => {
        this.messageService.mensagemSucesso('Espécie atualizada com sucesso!');
        this.redirecionarLista();
      });
  }

  private redirecionarLista() {
    this.router.navigate(['especies']);
  }
}
