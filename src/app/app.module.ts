import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { HomeModule } from "./home/home.module";
import { SharedModule } from "./shared/shared.module";
import { FormsDemoModule } from "./forms-demo/forms-demo.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HomeModule,
    SharedModule,
    FormsDemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
