import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import {RouterModule} from '@angular/router';
import {ComponentAComponent} from "./componentA/componentA.component";
import {ComponentBComponent} from "./componentB/componentB.component";
import {HomeComponent} from "./home/home.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [],
    declarations: [ComponentAComponent,ComponentBComponent,HomeComponent],
    exports: [ComponentAComponent,ComponentBComponent,HomeComponent]
})
export class DooboModule {

}
