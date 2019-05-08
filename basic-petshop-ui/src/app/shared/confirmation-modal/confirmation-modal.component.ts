import { OnInit, Component, Input} from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ConfirmationModalService } from "./confirmation-modal.service";


@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {

  @Input() titulo: string;
  @Input() mensagem: string;
  @Input() btnOkText: string;
  @Input() btnCancelText: string;
  @Input() objeto: Object;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  public declinar() {
    this.activeModal.close(false);
  }

  public aceitar() {
    this.activeModal.close(true);
  }

}
