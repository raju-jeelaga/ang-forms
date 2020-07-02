import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageComponent } from "./home-page/home-page.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, NgbModule, RouterModule],
})
export class HomeModule {}
