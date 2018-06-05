import {Directive, ElementRef, EventEmitter, OnInit, OnDestroy, Renderer2} from "@angular/core";

@Directive({
  selector: '[so]',
  outputs: ['scrollTop:so-top','scrollEnd:so-end'],
  host: {
    '(scroll)': 'onScroll($event.target)',
    '(touchend)': 'onTouch($event.target)',
    '(click)': 'onScroll($event.target)',
  }
})
export class ScrollDirective implements OnInit,OnDestroy{
  scrollTop = new EventEmitter();
  scrollEnd = new EventEmitter();

  constructor(private ele: ElementRef,private renderer: Renderer2,) {
  }

  parentHeight;
  scrollHeight;
  offsetHeight;
  ngOnInit(){
    this.parentHeight = this.ele.nativeElement.parentElement?this.ele.nativeElement.parentElement.offsetHeight:640;
    if(this.parentHeight === 0){
      let clientHeight = this.ele.nativeElement.clientHeight;
      this.ele.nativeElement.parentElement.style = `overflow: scroll; height: ${clientHeight}px;`
      this.ele.nativeElement.style = `overflow: scroll; height: ${clientHeight}px;`
    }
    this.offsetHeight = this.ele.nativeElement.offsetHeight;//文档可见区域的高度
    this.scrollHeight = this.ele.nativeElement.scrollHeight;
    // console.log(this.parentHeight,24,this.ele);
  }

  scroll(target) {
    // console.log(this.ele,31,target);
    if(this.offsetHeight === this.scrollHeight) return;
    if(!this.scrollTop && !this.scrollEnd) return;
    let scrollTop = this.ele.nativeElement.scrollTop;//文档偏移顶部的距离
    if(scrollTop === 0){
      this.scrollTop && this.scrollTop.emit({close:this.scrollEnd,element:target});
      console.log('已经到顶部啦-Top');
      return;
    }
    let scrollHeight = this.ele.nativeElement.scrollHeight;//文档的内容高度
    let offsetHeight = this.ele.nativeElement.offsetHeight;//文档可见区域的高度
    // console.log(scrollTop,scrollHeight,offsetHeight,40);
    if(scrollHeight - scrollTop === offsetHeight){
      this.scrollEnd && this.scrollEnd.emit({close:this.scrollEnd,element:target});
      console.log('已经到底部啦-End');
      return;
    }
  }

  touch(target){
    // console.log(this.ele,57,target);
    if(!this.scrollTop && !this.scrollEnd) return;
    if(this.offsetHeight !== this.scrollHeight) return;
    let scrollTop = this.ele.nativeElement.parentElement.scrollTop;//文档偏移顶部的距离
    if(scrollTop === 0){
      this.scrollTop && this.scrollTop.emit({close:this.scrollEnd,element:target});
      console.log('已经到顶部啦-Top');
      return;
    }
    let scrollHeight = this.ele.nativeElement.parentElement.scrollHeight;//文档的内容高度
    let offsetHeight = this.ele.nativeElement.parentElement.offsetHeight;//文档可见区域的高度
    // console.log(scrollTop,scrollHeight,offsetHeight,40);
    if(scrollHeight - scrollTop === offsetHeight){
      this.scrollEnd && this.scrollEnd.emit({close:this.scrollEnd,element:target});
      console.log('已经到底部啦-End');
      return;
    }
  }

  // 防抖动函数
  debounce(func:Function, wait:number, immediate?:any) {
    let timeout;
    return function() {
      let context = this, args = arguments;
      let later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  onScroll = this.debounce(this.scroll, 600);
  onTouch = this.debounce(this.touch, 300);

  ngOnDestroy(){
    this.scrollTop && this.scrollTop.unsubscribe();
    this.scrollEnd && this.scrollEnd.unsubscribe();
  }

}
