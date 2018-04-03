import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  template: `
  <h1 emitClick className="title">
      Welcome to {{ title }}!
  </h1>
  <button class="button button-3d" counting (outcome)="say($event)"
          numberOfClicks="0">Say Click Count-{{count}}
  </button>
   <p>
    <a routerLink="/first-route">To first-Router of lazy Loading</a>
  </p>
  <p>
    <a routerLink="/hd">To HD Child Page</a>
  </p>
  <p>
    <a routerLink="/element">To Element Page</a>
  </p>
  <p>
    <a routerLink="/">To Root Page--{{time|dateRange}}</a>
  </p>
  <router-outlet name="link"></router-outlet>
  `,
  styles: []
})
export class LinkComponent implements OnInit {
  title:string = 'app';
  count:number=0;
  time:Date = new Date('2018-3-27 17:10:00');
  tt = 1522142808573;

  constructor() { }

  say(value:any):void{
    this.count = value;
    console.log(value,22);
  }

  ngOnInit() {
  }
}
