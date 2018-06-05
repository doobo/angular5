import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { FirstRouteComponent } from './first-route.component';
import {FirstRouteRoutingModule} from "./first-route.routing";
import {BbcComponent} from "./bbc/bbc.component";
import {ScrollDirective} from "../../directive/scroll.directive";
import {DooboModule} from "../../modules/doobo/doobo.module";
import {FetchService} from "../../service/fetch.service";
import {StorageService} from "../../service/storage.service";

@NgModule({
    declarations: [
      FirstRouteComponent,
      BbcComponent,
      ScrollDirective
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
