import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomePageComponent } from "./home/home-page/home-page.component";
import { TemplateDrivenComponent } from "./forms/template-driven/template-driven.component";
import { ReactiveComponent } from "./forms/reactive/reactive.component";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "home", component: HomePageComponent },
  { path: "template-driven", component: TemplateDrivenComponent },
  { path: "reactive", component: ReactiveComponent },

  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
