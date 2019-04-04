import { NgModule, NO_ERRORS_SCHEMA, Component, NgZone } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { PhotoRoutingModule } from "./photo-routing.module";
import { PhotoComponent } from "./photo.component";
import { ModalDialogService } from "nativescript-angular/modal-dialog";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        PhotoRoutingModule
    ],
    declarations: [
        PhotoComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        ModalDialogService
    ]

})

export class PhotoModule {
  
}
