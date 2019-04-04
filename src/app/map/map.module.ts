import { NgModule, NO_ERRORS_SCHEMA, Component, NgZone } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MapRoutingModule } from "./map-routing.module";
import { MapComponent } from "./map.component";
import { ModalDialogService } from "nativescript-angular/modal-dialog";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MapRoutingModule
    ],
    declarations: [
        MapComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        ModalDialogService
    ]

})

export class MapModule {
  
}
