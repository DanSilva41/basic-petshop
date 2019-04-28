import { Component, OnInit } from '@angular/core';
import { AnimaisService } from '../animais.service';
import { ConfirmationModalService } from 'src/app/shared/confirmation-modal/confirmation-modal.service';
import { Animal } from 'src/app/core/models';

@Component({
  selector: 'app-listar-animais',
  templateUrl: './listar-animais.component.html',
  styleUrls: ['./listar-animais.component.css']
})
export class ListarAnimaisComponent implements OnInit {

  animais: Array<any>;

  constructor(private animaisService: AnimaisService,
              private confirmationModalService: ConfirmationModalService) { }

  ngOnInit() {
    this.listar();
  }

  private listar() {
    this.animaisService.listarAnimais().subscribe(response => this.animais = response);
  }

  private openConfirmationModal(animal: Animal) {
    this.confirmationModalService.confirmar('Confirmação de exclusão', 'Você realmente deseja excluir este animal ... ?')
      .then((confirmado) => console.log('User confirmed:', confirmado))
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

}
