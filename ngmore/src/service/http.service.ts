import {Injectable, NgZone, Injector} from '@angular/core';
import { HttpClient,HttpErrorResponse} from '@angular/common/http';
import 'rxjs/operator/toPromise';
import { StorageService } from './storage.service';
import {Router} from "@angular/router";
import {clearNullAndUndefinedValue} from "../utils/class-util";


@Injectable()
export class AppHttp {

  appConfig:any = {apiHost:'api'};
  constructor(private http:HttpClient,
              private injector: Injector,
              private storageService:StorageService) {

  }

  public get router(): Router {
    return this.injector.get(Router);
  }

  get(url: string, options?:any) {

    url = this.appConfig.apiHost + url;

    return this.http.get(url,  this.generateOption(options))
      .toPromise()
      .then(res=> this.responseSuccess(res),
        res=>this.responseError(res));
  }

  post(url: string, body: any, options?: any) {

    url = this.appConfig.apiHost + url;
    return this.http.post(url,body,this.generateOption(options))
      .toPromise()
      .then(res=> this.responseSuccess(res),
        res=>this.responseError(res));
  }

  //执行成功结果过滤
  responseSuccess(result:any) {
    if(result['no_login_and_exit']) {
      localStorage.removeItem('userData');
      this.router.navigate(['/login']);
    }
    return Promise.resolve(result);
  }

  //执行失败结果过滤
  responseError(response:HttpErrorResponse) {
    let data:any = response.error;
    if(response.status && (response.status==500||response.status==503
        ||response.status==408||response.status==504||response.status==-1)) {
    }else if (data) {
      if(data.errorCode) {
        if(data.errorCode=="no_login" || data.errorCode=="no_login_and_exit" || data.errorCode=="no_token") {
          localStorage.removeItem('userData');
          this.router.navigate(['/login']);
        }
      }else {
        data.errorCode = "system_error";
        data.errorMsg = "系统异常，请稍后再试";
      }
    }else {
      data.errorCode = "system_error";
      data.errorMsg = "系统异常，请稍后再试";
    }
    return Promise.reject(data);
  }

  generateOption(options: any):Object {
    let params:{} = {
      agentId:this.appConfig.agentId,
      platform:'wap',
      version:this.appConfig.version
    };

    if(!options) {
      options = {params:params};
    }else if(!options.params) {
      options.params = params;
    }else {
      for (let name in params) {
        options.params[name] = params[name];
      }
    }

    let token = '';
    let user:{} = this.storageService.getObject('userData');
    if (user&&user['token']) {
      token=user['token'];
    }
    clearNullAndUndefinedValue(options.params);
    return options;
  }

  loadFile(url:string) {
    return this.http.get(url).toPromise()
      .then((res: any)=> {
        return res;
      });
  }
}
