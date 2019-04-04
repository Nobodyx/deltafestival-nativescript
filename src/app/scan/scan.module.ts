import { NgModule, NO_ERRORS_SCHEMA, Component, NgZone } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ScanRoutingModule } from "./scan-routing.module";
import { ScanComponent } from "./scan.component";
import { ModalDialogService } from "nativescript-angular/modal-dialog";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ScanRoutingModule
    ],
    declarations: [
        ScanComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        ModalDialogService
    ]

})

export class ScanModule {
  
}
