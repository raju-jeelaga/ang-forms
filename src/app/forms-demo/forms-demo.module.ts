import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";

import { SharedModule } from "../shared/shared.module";

import { FormControlComponent } from "./reactive/form-control/form-control.component";
import { FormGroupComponent } from "./reactive/form-group/form-group.component";
import { FormArrayComponent } from "./reactive/form-array/form-array.component";
import { FormBuilderComponent } from "./reactive/form-builder/form-builder.component";
import { NestedFormGroupComponent } from "./reactive/nested-form-group/nested-form-group.component";
import { SuperHeroComponent } from "./template-driven/super-hero/super-hero.component";
import { ReactiveFormValidationComponent } from "./reactive/reactive-form-validation/reactive-form-validation.component";

@NgModule({
  declarations: [
    FormControlComponent,
    FormGroupComponent,
    FormArrayComponent,
    FormBuilderComponent,
    NestedFormGroupComponent,
    SuperHeroComponent,
    ReactiveFormValidationComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, SharedModule],
})
export class FormsDemoModule {}
