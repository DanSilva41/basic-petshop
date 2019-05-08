import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from "./navbar/navbar.component";
import { TopnavbarComponent } from "./topnavbar/topnavbar.component";
import { PaginaNaoEncontradaComponent } from "./pagina-nao-encontrada/pagina-nao-encontrada.component";
import { AnimaisService } from "../animais/animais.service";
import { LoginService } from "../login/login.service";
import { EspeciesService} from "../especies/especies.service";
import { ConfirmationModalService } from "../shared/confirmation-modal/confirmation-modal.service";
import { ConfirmationModalComponent } from "../shared/confirmation-modal/confirmation-modal.component";
import { ErrorHandlerService } from "./error-handler.service";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        NgbModule.forRoot()
    ],
    declarations: [
      NavbarComponent,
      TopnavbarComponent,
      PaginaNaoEncontradaComponent,
      ConfirmationModalComponent
    ],
    exports: [
        NavbarComponent,
        TopnavbarComponent,
        PaginaNaoEncontradaComponent,
        ConfirmationModalComponent
    ],
    providers: [
        AnimaisService,
        EspeciesService,
        LoginService,
        
        ConfirmationModalService,
        ErrorHandlerService
    ],
    entryComponents: [ ConfirmationModalComponent ]
})
export class CoreModule {   }
