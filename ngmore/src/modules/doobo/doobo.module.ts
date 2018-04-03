import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import {ComponentAComponent} from "./componentA";
import {ComponentBComponent} from "./componentB";
import {HomeComponent} from "./home";
import {RouterModule} from '@angular/router';

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
