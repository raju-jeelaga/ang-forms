import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomePageComponent } from "./home/home-page/home-page.component";

import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";

import { FormControlComponent } from "./forms-demo/reactive/form-control/form-control.component";
import { FormBuilderComponent } from "./forms-demo/reactive/form-builder/form-builder.component";
import { FormArrayComponent } from "./forms-demo/reactive/form-array/form-array.component";
import { FormGroupComponent } from "./forms-demo/reactive/form-group/form-group.component";
import { NestedFormGroupComponent } from "./forms-demo/reactive/nested-form-group/nested-form-group.component";
const routes: Routes = [
  { path: "home", component: HomePageComponent },
  { path: "form-control", component: FormControlComponent },
  { path: "form-builder", component: FormBuilderComponent },
  { path: "nested-form-group", component: NestedFormGroupComponent },
  { path: "form-array", component: FormArrayComponent },
  { path: "form-group", component: FormGroupComponent },

  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
