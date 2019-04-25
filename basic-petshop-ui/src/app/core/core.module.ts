import { NgModule, LOCALE_ID } from "@angular/core";
import { CommonModule, registerLocaleData } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { TopnavbarComponent } from "./topnavbar/topnavbar.component";
import { PaginaNaoEncontradaComponent } from "./pagina-nao-encontrada/pagina-nao-encontrada.component";
import { AnimaisService } from "../animais/animais.service";
import { LoginService } from "../login/login.service";
import { EspeciesService} from "../especies/especies.service";

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
      NavbarComponent,
      TopnavbarComponent,
      PaginaNaoEncontradaComponent
    ],
    exports: [
        NavbarComponent,
        TopnavbarComponent,
        PaginaNaoEncontradaComponent
    ],
    providers: [
        AnimaisService,
        EspeciesService,
        LoginService
    ]
})
export class CoreModule {   }
