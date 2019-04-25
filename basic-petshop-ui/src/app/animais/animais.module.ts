import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {ListarAnimaisComponent} from './listar-animais/listar-animais.component';
import {CadastrarAnimaisComponent} from './cadastrar-animais/cadastrar-animais.component';

import {AnimaisService} from './animais.service';
import {AnimaisRoutingModule} from './animais-routing-module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AnimaisRoutingModule,
    FormsModule
  ],
  exports: [
    ListarAnimaisComponent,
    CadastrarAnimaisComponent
  ],
  declarations: [
    ListarAnimaisComponent,
    CadastrarAnimaisComponent
  ],
  providers: [
    AnimaisService
  ]
})
export class AnimaisModule {
}
