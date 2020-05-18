import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClonesSubComponent } from './clones-sub.component';
import { ClonesChildComponent } from './clones-child/clones-child.component';

const routes: Routes = [{
  path: '',
  component: ClonesSubComponent
},
{
  path: 'clones-child',
  component: ClonesChildComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClonesSubRoutingModule { }
