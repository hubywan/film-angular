import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { DetailComponent } from "./detail/detail.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        // ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    declarations: [AppComponent, HomeComponent, DetailComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
