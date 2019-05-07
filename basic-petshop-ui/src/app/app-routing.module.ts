import {AnimaisModule} from './animais/animais.module';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginModule} from './login/login.module';
import {PaginaNaoEncontradaComponent} from './core/pagina-nao-encontrada/pagina-nao-encontrada.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {EspeciesModule} from "./especies/especies.module";


const APP_ROUTES: Routes = [
  {path: 'animais', loadChildren: () => AnimaisModule},
  {path: 'especies', loadChildren: () => EspeciesModule},
  {path: 'login', loadChildren: () => LoginModule},
  {path: 'dashboard', loadChildren: () => DashboardModule},

  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent},
  {path: '**', redirectTo: 'pagina-nao-encontrada'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
