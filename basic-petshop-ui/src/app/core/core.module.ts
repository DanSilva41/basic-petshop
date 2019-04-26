import { NgModule, LOCALE_ID } from "@angular/core";
import { CommonModule, registerLocaleData } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { TopnavbarComponent } from "./topnavbar/topnavbar.component";
import { PaginaNaoEncontradaComponent } from "./pagina-nao-encontrada/pagina-nao-encontrada.component";
import { AnimaisService } from "../animais/animais.service";
import { LoginService } from "../login/login.service";
import { EspeciesService} from "../especies/especies.service";
import { GrowlModule } from "primeng/growl";
import {ConfirmationService, ConfirmDialogModule, MessageService} from "primeng/primeng";
import {Title} from "@angular/platform-browser";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        GrowlModule,
        ConfirmDialogModule
    ],
    declarations: [
      NavbarComponent,
      TopnavbarComponent,
      PaginaNaoEncontradaComponent
    ],
    exports: [
        NavbarComponent,
        TopnavbarComponent,
        PaginaNaoEncontradaComponent,
        GrowlModule,
        ConfirmDialogModule
    ],
    providers: [
        AnimaisService,
        EspeciesService,
        LoginService,

        ConfirmationService,
        MessageService,
        Title
    ]
})
export class CoreModule {   }
