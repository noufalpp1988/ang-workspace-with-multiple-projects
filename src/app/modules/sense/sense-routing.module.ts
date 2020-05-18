import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SenseComponent } from './sense/sense.component';

const routes: Routes = [{
  path: '',
  component: SenseComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SenseRoutingModule { }
