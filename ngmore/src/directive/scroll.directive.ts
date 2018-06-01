import {Directive, ElementRef, EventEmitter, OnInit, OnDestroy, Renderer2} from "@angular/core";
import {Observable} from "rxjs";
import {debounceTime} from 'rxjs/operators';

@Directive({
  selector: '[so]',
  outputs: ['scrollTop:so-top','scrollEnd:so-end'],
  host: {
    '(scroll)': 'onScroll($event.target)',
    '(touchend)': 'onScroll($event.target)',
    '(click)': 'onScroll($event.target)',
  }
})
export class ScrollDirective implements OnInit,OnDestroy{
  scrollTop = new EventEmitter();
  scrollEnd = new EventEmitter();

  constructor(private ele: ElementRef,private renderer: Renderer2,) {
  }

  ngOnInit(){

    /*this.renderer.listen(this.ele.nativeElement, 'scroll', () => {
      console.log('scroll',27);
    });*/

    Observable.fromEvent(this.ele.nativeElement, 'scroll').subscribe((event) => {
      console.log('scroll',32);
    });
  }

  onScroll(target) {
    console.log(this.ele,31);
    if(!this.scrollTop && !this.scrollEnd) return;
    let scrollHeight = this.ele.nativeElement.offsetHeight; //整个文档的高度
    let offsetTop = this.ele.nativeElement.offsetTop;//文档偏移父节点到高度
    let scrollTop = this.ele.nativeElement.parentElement?this.ele.nativeElement.parentElement.scrollTop:0;//滚动条的垂直位置
    let parentHeight = this.ele.nativeElement.parentElement?this.ele.nativeElement.parentElement.clientHeight:640; //当前可见区域的大小
    console.log(scrollTop,scrollHeight,parentHeight,scrollTop + parentHeight,this.ele.nativeElement.offsetTop);
    if(scrollTop + parentHeight === scrollHeight+offsetTop){
      this.scrollEnd && this.scrollEnd.emit({close:this.scrollEnd,element:target});
      console.log('已经到底部啦-End');
      return;
    }
    if(scrollTop === 0){
      this.scrollTop && this.scrollTop.emit({close:this.scrollEnd,element:target});
      console.log('已经到顶部啦-Top');
      return;
    }
  }

  ngOnDestroy(){
    this.scrollTop && this.scrollTop.unsubscribe();
    this.scrollEnd && this.scrollEnd.unsubscribe();
  }

}
