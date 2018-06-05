import { Component,ElementRef  } from '@angular/core';
import {args} from "./args.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show:boolean=true;
  tag:boolean=false;
  constructor(private ref:ElementRef ) {
    // console.log(ref.nativeElement,13);
    // console.log(args[args.eight],args[args.one],14);
  }

  //测试方法
  showElement():void{
    this.show = !this.show;
  }

  //获取页面元素后的回调函数,处理Element
  outElement(ele:any):void{
    // console.log(ele,28);
  }
}
