import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { FirstRouteComponent } from './first-route.component';
import {FirstRouteRoutingModule} from "./first-route.routing";
import {DooboModule} from "../../modules";
import {FetchService,StorageService} from "../../service";
import {BbcComponent} from "./bbc/bbc.component";

@NgModule({
    declarations: [
      FirstRouteComponent,
      BbcComponent
    ],
    imports: [
        CommonModule,
        FirstRouteRoutingModule,
        DooboModule,
        HttpClientModule
    ],
    providers: [FetchService,StorageService],
    exports: [FirstRouteRoutingModule,FirstRouteComponent]
})
export class FirstRouteModule {

}
