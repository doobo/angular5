import { NgModule }  from '@angular/core';
import { Routes, RouterModule,PreloadAllModules } from '@angular/router';
import {PreloadStrategyProvider} from './preloadStrategyProvider';
//import {CanLoadProvider} from "./canLoadProvider";
import {LinkComponent} from "../app/link/link.component";
import {ComponentBComponent} from "../modules/doobo/componentB";

const routes: Routes = [
  { path:'',
    children:[
      {path:'hd',component:ComponentBComponent},
      {path:'',component:LinkComponent,outlet:'other'},
    ]},
  {
    path: 'first-route',
    data:{preload:false},//ToDo:局部预加载，false不提前预加载
    loadChildren: './first-route/first-route.module#FirstRouteModule',//ToDo:延迟加载，惰性加载
    //canLoad: [CanLoadProvider], //ToDo:该配置会影响预加载,不进行预加载
  },
  {path: 'element', loadChildren: './element-unit/element-unit.module#ElementUnitModule',data:{preload:true}},
  //{path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [
    // ToDo:在惰性加载的基础上配置全局预加载
    //RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules}),
    // ToDo:在惰性加载的基础上配置局部预加载，需要在路由配置上加--data:{preload:true}
    RouterModule.forRoot(routes,{preloadingStrategy:PreloadStrategyProvider}),
  ],
  exports: [RouterModule],
  providers:[PreloadStrategyProvider]
})

export class BaseRoutingModule {}
