import { Component, OnInit } from '@angular/core';
import {AnimaisService} from '../animais.service';
import {Animal, Especie} from '../../core/models';
import { Router, ActivatedRoute } from '@angular/router';
import { EspeciesService } from 'src/app/especies/especies.service';
import { MessageService } from 'src/app/shared/message/message.service';
import { Title } from '@angular/platform-browser';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-cadastrar-animais',
  templateUrl: './cadastrar-animais.component.html',
  styleUrls: ['./cadastrar-animais.component.css']
})
export class CadastrarAnimaisComponent implements OnInit {

  private animal;
  private especies: Array<Especie>;
  private sexoAnimal = [{value: 'FEMEA', label: 'FÊMEA'}, {value: 'MACHO', label: 'MACHO'}];
  private isEdicao: boolean;
  private tituloPagina: string;

  constructor(private animaisService: AnimaisService,
              private especiesService: EspeciesService,
              private messageService: MessageService,
              private errorHandler: ErrorHandlerService,
              private route: ActivatedRoute,
              private router: Router,
              private title: Title) { }

  ngOnInit() {
    this.title.setTitle("Animais");
    this.tituloPagina = "Cadastrar Animal";

    const codigoAnimal = this.route.snapshot.params['codigo'];
    
    if(codigoAnimal) {
      this.buscarAnimal(codigoAnimal);
    } else {
      this.animal = new Animal();
      this.animal.especie.codigo = 0;
    }
    this.listarEspecies();
  }

  private buscarAnimal(codigoAnimal: number) {
    this.animaisService.buscarPeloCodigo(codigoAnimal)
        .then(animalRetornado => {
          this.animal = animalRetornado;
          this.isEdicao = true;
          this.tituloPagina = "Edição de Animal: "+ animalRetornado.nome;
        })
        .catch(erro => this.errorHandler.handle(erro));
  }

  salvar() {
    if(this.animal.especie.codigo == 0) {
      this.messageService.mensagemAlerta("Alguma espécie deve ser selecionada!");
      return;
    }
    if(this.isEdicao) {
      this.atualizarEspecie();
    } else {
      this.cadastrarEspecie();
    }
  }

  private cadastrarEspecie() {
    this.animaisService.cadastrar(this.animal)
      .then(animalCadastrado => {
        this.messageService.mensagemSucesso('Animal cadastrado com sucesso!');
        this.redirecionarLista();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  private atualizarEspecie() {
    this.animaisService.atualizar(this.animal)
      .then(animalAtualizado => {
        this.messageService.mensagemSucesso('Animal atualizado com sucesso!');
        this.redirecionarLista();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  private listarEspecies() {
    this.especiesService.listarEspecies()
      .subscribe(response => {
        this.especies = response;
      });
  }
  
  private redirecionarLista() {
      this.router.navigate(['animais']);
  }
}
