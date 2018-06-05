import { Component, OnInit, OnDestroy } from '@angular/core';
import {MessageService} from "../../modules/element/message.service";

@Component({
    selector: 'element-unit',
    templateUrl: 'element-unit.component.html',
    styleUrls: ['element-unit.component.scss'],
})
export class ElementUnitComponent implements OnInit, OnDestroy {

    constructor(private message:MessageService) {
      this.message.showClose('Element Message Show!','success',()=>{
        this.message.notifyInfo('消息盒子已经关闭','warning');
      });
    }

    ngOnInit() {

    }

    ngOnDestroy() {

    }
}
