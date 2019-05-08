import {Injectable} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from './confirmation-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationModalService {

  constructor(private modalService: NgbModal) {}

  public confirmar(titulo: string, mensagem: string, objeto: Object, btnOkText: string = 'OK', btnCancelText: string = 'Cancel', modalSize: 'sm'|'lg' = 'lg'): Promise<boolean> {
    const modalRef = this.modalService.open(ConfirmationModalComponent, { size: modalSize });
    modalRef.componentInstance.title = titulo;
    modalRef.componentInstance.message = mensagem;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;
    modalRef.componentInstance.objeto = objeto;

    return modalRef.result;
  }

}
