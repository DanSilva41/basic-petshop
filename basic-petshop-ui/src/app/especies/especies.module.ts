import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {ListarEspeciesComponent} from './listar-especies/listar-especies.component';
import {CadastrarEspeciesComponent} from './cadastrar-especies/cadastrar-especies.component';

import {EspeciesService} from './especies.service';
import {EspeciesRoutingModule} from './especies-routing-module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    EspeciesRoutingModule,
    FormsModule
  ],
  exports: [
    ListarEspeciesComponent,
    CadastrarEspeciesComponent
  ],
  declarations: [
    ListarEspeciesComponent,
    CadastrarEspeciesComponent
  ],
  providers: [
    EspeciesService
  ]
})
export class EspeciesModule {
}
