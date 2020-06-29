import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';



@NgModule({
  declarations: [ReactiveComponent, TemplateDrivenComponent],
  imports: [
    CommonModule
  ]
})
export class FormsModule { }
