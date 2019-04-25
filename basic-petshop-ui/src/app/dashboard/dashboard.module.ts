import {NgModule} from "../../../node_modules/@angular/core";
import {CommonModule} from "../../../node_modules/@angular/common";
import {DashboardRoutingModule} from "./dashboard-routing.module.";
import {DashboardComponent} from "./dashboard/dashboard.component";

@NgModule({
  imports: [
    CommonModule,

    DashboardRoutingModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {
}
