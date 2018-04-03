import {Directive, ElementRef,EventEmitter} from "@angular/core";

@Directive({
  selector: 'button[counting]',
  outputs: ['outcome'],
  inputs:['numberOfClicks'],
  host: {
    '(click)': 'onClick($event.target)'
  }
})
export class CountClicks {
  numberOfClicks = 0;//Todo:从外面传值初始化
  outcome = new EventEmitter();//ToDo:通知外部的事件

  constructor(el: ElementRef) {
    //ToDo:获取指令所属的Element元素
    //console.log(el.nativeElement,17);
  }

  onClick(btnElement) {
    this.outcome.emit(++this.numberOfClicks);
    // console.log(this.numberOfClicks,22);
  }
}
