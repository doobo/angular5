import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ElModule } from 'element-angular';
import {AcAlertComponent} from "./ac-alert";
import {MessageService} from "./message.service";

/**
 * Todo:依赖安装使用方式
 * npm i --save element-angular
 * src/style.css  @import "~element-angular/theme/index.css";
 * import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
 * imports:[BrowserAnimationsModule]
 */
@NgModule({
  declarations: [AcAlertComponent],
  imports: [
        CommonModule,
        ElModule.forRoot()
    ],
  providers: [MessageService],
  exports: [AcAlertComponent],
  entryComponents:[]
})
export class ElementModule {

}
