import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ScanComponent } from "./scan.component";
import { BarcodeScanner } from 'nativescript-barcodescanner';

const routes: Routes = [
    { path: "", component: ScanComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    providers: [
        BarcodeScanner
      ],
    exports: [NativeScriptRouterModule]
})
export class ScanRoutingModule { }
