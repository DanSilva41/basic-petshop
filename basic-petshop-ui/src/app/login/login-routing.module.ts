import { RouterModule, Routes } from "../../../node_modules/@angular/router";
import { NgModule } from "../../../node_modules/@angular/core";
import { AuthComponent } from "./auth/auth.component";

const routes: Routes = [
    { path: '', component: AuthComponent },
];
  
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
  