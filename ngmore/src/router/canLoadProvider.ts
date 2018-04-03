import { Injectable } from '@angular/core';
import { Route,CanLoad } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CanLoadProvider implements CanLoad {
  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    //ToDo:返回True能显示路由内容，返回False则不能激活路由
    return true;
  }
}
