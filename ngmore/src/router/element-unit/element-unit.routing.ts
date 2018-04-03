import { NgModule,ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElementUnitComponent } from './element-unit.component';

const routes: Routes = [
    { path: '', component: ElementUnitComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class ElementUnitRouting {};
