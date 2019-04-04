import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";


const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "scan", loadChildren: "~/app/scan/scan.module#ScanModule" },
    { path: "auth", loadChildren: "~/app/auth/auth.module#AuthModule" },
    { path: "map", loadChildren: "~/app/map/map.module#MapModule" },
    { path: "planning", loadChildren: "~/app/planning/planning.module#PlanningModule" },
    { path: "photo", loadChildren: "~/app/photo/photo.module#PhotoModule"}

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
