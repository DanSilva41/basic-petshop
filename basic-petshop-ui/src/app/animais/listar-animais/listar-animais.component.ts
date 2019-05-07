import { Component, OnInit } from '@angular/core';
import { AnimaisService } from '../animais.service';
import { ConfirmationModalService } from 'src/app/shared/confirmation-modal/confirmation-modal.service';
import { Animal } from 'src/app/core/models';
import { MessageService } from 'src/app/shared/message/message.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-listar-animais',
  templateUrl: './listar-animais.component.html',
  styleUrls: ['./listar-animais.component.css']
})
export class ListarAnimaisComponent implements OnInit {

  private animais: Array<any>;
  private tituloPagina: string;

  constructor(private animaisService: AnimaisService,
              private confirmationModalService: ConfirmationModalService,
              private messageService: MessageService,
              private title: Title) { }

  ngOnInit() {
    this.title.setTitle("Animais");
    this.tituloPagina = "Lista de Animais";

    this.listar();
  }

  private listar() {
    this.animaisService.listarAnimais().subscribe(response => this.animais = response);
  } 

  private openConfirmationModal(animal: Animal) {
    let objetoCustomizado = this.retornarPropriedadesCustomizadas(animal);
    this.confirmationModalService.confirmar('Confirmação de exclusão', 'Você realmente deseja excluir este animal?', objetoCustomizado)
      .then((confirmado) => {
        this.animaisService.deletar(animal.codigo)
          .then((response) => {
            this.animais = response;
            this.messageService.mensagemSucesso('Animal deletado com sucesso!');
          });
      })
      .catch(() => 
        console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  private retornarPropriedadesCustomizadas(animal: Animal) {
    let objetoCustomizado = {
      "Código": animal.codigo,
      "Nome": animal.nome,
      "Data de Nascimento": animal.dataNascimento,
      "Sexo": animal.sexo,
      "Espécie": animal.especie.nome
    }
    return objetoCustomizado;
  }
}
