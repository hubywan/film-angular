import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetailComponent } from "./detail/detail.component";
import { HomeComponent } from "./home/home.component";
const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "detail/:id", component: DetailComponent },
    { path: "", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
