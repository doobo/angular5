import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {debounceTime,switchMap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

@Injectable()
export class PreloadStrategyProvider implements PreloadingStrategy {

  //Todo:配置data:{preload:true}来确定是否延迟加载
  preload(route: Route, load: Function): Observable<any> {
    return route.data && route.data.preload ? load() : of(null);
  }

}
