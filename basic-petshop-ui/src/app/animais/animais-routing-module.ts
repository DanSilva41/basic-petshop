import { ListarAnimaisComponent } from './listar-animais/listar-animais.component';
import { CadastrarAnimaisComponent } from './cadastrar-animais/cadastrar-animais.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  { path: '', component: ListarAnimaisComponent },
  { path: 'novo', component: CadastrarAnimaisComponent},
  { path: ':codigo', component: CadastrarAnimaisComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AnimaisRoutingModule {
}


