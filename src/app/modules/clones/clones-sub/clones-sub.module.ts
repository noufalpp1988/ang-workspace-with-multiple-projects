import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClonesSubRoutingModule } from './clones-sub-routing.module';
import { ClonesSubComponent } from './clones-sub.component';
import { ClonesChildComponent } from './clones-child/clones-child.component';

@NgModule({
  declarations: [ClonesSubComponent, ClonesChildComponent],
  imports: [
    CommonModule,
    ClonesSubRoutingModule
  ]
})
export class ClonesSubModule { }
