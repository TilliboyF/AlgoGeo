import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { PointsFormComponent } from './points-form/points-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ConvexHullComponent } from './convex-hull/convex-hull.component';
import { HeaderComponent } from './header/header.component';
import { IntersectionsComponent } from './intersections/intersections.component';
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PointsFormComponent,
    ConvexHullComponent,
    HeaderComponent,
    IntersectionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
