import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClonesModule } from '@baseApp/modules/clones/clones.module';
import { ClonesSubModule } from '@baseApp/modules/clones/clones-sub/clones-sub.module';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'moduleone',
  loadChildren: './module-one/module-one.module#ModuleOneModule'
},
{
  path: 'clones',
  loadChildren: '@baseApp/modules/clones/clones.module#ClonesModule'
},
{ path: '**', redirectTo: '', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
