import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClonesComponent } from './clones.component';

const routes: Routes = [{
  path: '',
  component: ClonesComponent,
  children: [{
    path: 'clones-sub',
    loadChildren: './clones-sub/clones-sub.module#ClonesSubModule'
  }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClonesRoutingModule { }
