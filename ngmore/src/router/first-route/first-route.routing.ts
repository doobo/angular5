import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstRouteComponent } from './first-route.component';
import {ComponentAComponent} from "../../modules/doobo/componentA/componentA.component";
import {HomeComponent} from "../../modules/doobo/home/home.component";
import {BbcComponent} from "./bbc/bbc.component";

const routes: Routes = [
    { path: '',
      children:[
        {path: 'abc', component: ComponentAComponent},//Todo:用first-route/link访问
        {path: 'bbc', component: HomeComponent},
        {path: '', component: FirstRouteComponent,outlet:'home'},
      ],//辅助路由可以显示到父页面里面的router-outlet
    },
    //Todo:下面的指定outlet不能已经激活
    { path:'native', component: BbcComponent,outlet:'routing'},//二层路由指定outlet，只能用first-route/(home:native)访问
    { path:'link', component: BbcComponent}//二层路由不指定outlet，可以用first-route/link访问
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})

export class FirstRouteRoutingModule {

};
