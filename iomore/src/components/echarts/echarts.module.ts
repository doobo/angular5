import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import {EchartsComponent} from "./echarts.component";

@NgModule({
    imports: [
      CommonModule,EchartsComponent
    ],
    providers: [],
    declarations: [],
    exports: [EchartsComponent]
})
export class EchartsModule {}
