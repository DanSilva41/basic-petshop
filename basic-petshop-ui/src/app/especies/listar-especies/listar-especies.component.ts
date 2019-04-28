import {Component, OnInit} from '@angular/core';
import {EspeciesService} from '../especies.service';
import {Especie} from "../../core/models";
import { ConfirmationModalService } from 'src/app/shared/confirmation-modal/confirmation-modal.service';

@Component({
  selector: 'app-listar-especies',
  templateUrl: './listar-especies.component.html',
  styleUrls: ['./listar-especies.component.css']
})
export class ListarEspeciesComponent implements OnInit {

  especies: Array<Especie>;

  constructor(private especiesService: EspeciesService,
              private confirmationModalService: ConfirmationModalService) {
  }

  ngOnInit() {
    this.listar();
  }

  private listar() {
    this.especiesService.listarEspecies().subscribe(response => this.especies = response);
  }

  private openConfirmationModal() {
      this.confirmationModalService.confirmar('Por favor, confirme..', 'Você realmente deseja excluir este registro ... ?')
        .then((confirmado) => console.log('User confirmed:', confirmado))
        .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

}
