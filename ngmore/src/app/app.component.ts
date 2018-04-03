import { Component,ElementRef  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show:boolean=true;
  tag:boolean=false;
  constructor(private ref:ElementRef ) {
  }

  //测试方法
  showElement():void{
    this.show = !this.show;
  }

  //获取页面元素后的回调函数,处理Element
  outElement(ele:any):void{
    console.log(ele,28);
  }
}
