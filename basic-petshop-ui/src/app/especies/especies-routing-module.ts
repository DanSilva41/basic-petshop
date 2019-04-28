import { ListarEspeciesComponent } from './listar-especies/listar-especies.component';
import { CadastrarEspeciesComponent } from './cadastrar-especies/cadastrar-especies.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  { path: '', component: ListarEspeciesComponent },
  { path: 'novo', component: CadastrarEspeciesComponent},
  { path: ':codigo', component: CadastrarEspeciesComponent},

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EspeciesRoutingModule {
}
