import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FetchService} from "../../service";
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'first-route',
    templateUrl: 'first-route.component.html',
    styleUrls: ['first-route.component.scss'],
})
export class FirstRouteComponent implements OnInit, OnDestroy {

    constructor(private http:FetchService,
                private route:ActivatedRoute,
                public router: Router) {

    }

    toBbcRouter():void{
      //在first-route(home:bbc)
      //this.router.navigate([{outlets: {home:['bbc']}}]);
      this.router.navigate(['bbc'],{relativeTo:this.route});
    }

    toBbRouter():void{
      this.router.navigate(['./', {outlets: {'routing':['native']}}],{relativeTo: this.route});
    }

    //ToDo:清空指定路由
    closeRouting():void{
      console.log(this.route)
      this.router.navigate([{outlets: {'routing':null}}],{relativeTo: this.route});
    }

    ngOnInit() {
       this.http.getQqMusic();
      //this.http.getText('/index.html');
    }

    ngOnDestroy() {
    }
}
