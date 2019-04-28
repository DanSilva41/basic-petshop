import {DashboardRoutingModule} from "./dashboard-routing.module.";
import {DashboardComponent} from "./dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,

    DashboardRoutingModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {
}
