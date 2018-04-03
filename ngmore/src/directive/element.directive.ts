import {Directive, ElementRef,EventEmitter,OnInit,OnDestroy} from "@angular/core";

@Directive({
  selector: '[ele]',
  outputs: ['eleInit:ele-init','eleDestroy:ele-destroy'],
})
export class ElementDirective implements OnInit,OnDestroy{
  eleInit = new EventEmitter();//ToDo:通知外部的事件
  eleDestroy = new EventEmitter();//ToDo:通知外部的事件

  constructor(private ele: ElementRef) {
    //ToDo:获取指令所属的Element元素
  }

  //Todo:指令初始化完成后，通知父元素
  ngOnInit(){
    this.eleInit.emit(this.ele.nativeElement);
  }

  //Todo:指令销毁时，通知父元素
  ngOnDestroy(){
    this.eleDestroy.emit(null);
  }

}
