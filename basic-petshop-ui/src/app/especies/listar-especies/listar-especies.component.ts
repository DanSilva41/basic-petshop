import {Component, OnInit} from '@angular/core';
import {EspeciesService} from '../especies.service';
import {Especie} from "../../core/models";
import { ConfirmationModalService } from 'src/app/shared/confirmation-modal/confirmation-modal.service';
import { MessageService } from 'src/app/shared/message/message.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-listar-especies',
  templateUrl: './listar-especies.component.html',
  styleUrls: ['./listar-especies.component.css']
})
export class ListarEspeciesComponent implements OnInit {

  private especies: Array<Especie>;
  private tituloPagina: string;

  constructor(private especiesService: EspeciesService,
              private messageService: MessageService,
              private confirmationModalService: ConfirmationModalService,
              private title: Title) {
  }

  ngOnInit() {
    this.title.setTitle('Espécies');
    this.tituloPagina = "Lista de Espécies";
    
    this.listar();
  }

  private listar() {
    this.especiesService.listarEspecies().subscribe(response => this.especies = response);
  }

  private openConfirmationModal(especie: Especie) {
    let objetoCustomizado = this.retornarPropriedadesCustomizadas(especie);
      this.confirmationModalService.confirmar('Confirmação de exclusão', 'Você realmente deseja excluir esta espécie?', objetoCustomizado)
        .then((confirmado) => {
          this.especiesService.deletar(especie.codigo)
            .then((response) => {
              this.especies = response;
              this.messageService.mensagemSucesso('Espécie deletada com sucesso!');
            });
        })
        .catch(() => 
          console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  private retornarPropriedadesCustomizadas(especie: Especie) {
    let objetoCustomizado = {
      "Código": especie.codigo,
      "Nome": especie.nome,
      "Descrição": especie.descricao
    }
    return objetoCustomizado;
  }

}
