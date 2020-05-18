import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'clones',
  loadChildren: './modules/clones/clones.module#ClonesModule'
},
{
  path: 'vision',
  loadChildren: './modules/vision/vision.module#VisionModule'
},
{
  path: 'sense',
  loadChildren: './modules/sense/sense.module#SenseModule'
},
{ path: '**', redirectTo: '', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
