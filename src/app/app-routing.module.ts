import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ConvexHullComponent } from "./convex-hull/convex-hull.component";
import { IntersectionsComponent } from "./intersections/intersections.component";


const appRoutes: Routes = [
  {path: '', redirectTo: 'konvex', pathMatch: 'full'},
  {path: 'konvex', component: ConvexHullComponent},
  {path: 'schnittpunkte', component: IntersectionsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
