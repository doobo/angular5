import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ElementUnitRouting } from './element-unit.routing';
import { ElementUnitComponent } from './element-unit.component';
import {ElementModule} from "../../modules";

@NgModule({
    imports: [
        CommonModule,
        ElementUnitRouting,
        ElementModule
    ],
    providers: [],
    declarations: [
        ElementUnitComponent
    ],
    exports: []
})
export class ElementUnitModule {

}
