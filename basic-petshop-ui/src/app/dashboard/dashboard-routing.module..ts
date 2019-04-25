import {RouterModule, Routes} from "../../../node_modules/@angular/router";
import {NgModule} from "../../../node_modules/@angular/core";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {path: '', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
