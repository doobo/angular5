import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BaseRoutingModule} from '../router/base-router.routing';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {EmitClickDirective} from "../directive/emitclick.directive";
import {DooboModule} from "../modules";
import {CountClicks} from "../directive/countClicks.directive";
import {DateRange} from "../pipes/dateRange.pipe";
import {ValuesPipe} from "../pipes/values.pipe";
import { LinkComponent } from './link/link.component';
import {ElementDirective} from "../directive/element.directive";

@NgModule({
  declarations: [
    AppComponent,
    EmitClickDirective,
    CountClicks,
    DateRange,
    ValuesPipe,
    LinkComponent,
    ElementDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BaseRoutingModule,
    DooboModule
  ],
  providers: [
    //Todo:以非rest方式Url呈现
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
