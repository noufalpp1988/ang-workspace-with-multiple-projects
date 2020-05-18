import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClonesRoutingModule } from './clones-routing.module';
import { ClonesComponent } from './clones.component';
import { ButtonModule } from 'smartops-ui-core';

@NgModule({
  declarations: [ClonesComponent],
  imports: [
    CommonModule,
    ClonesRoutingModule,
    ButtonModule
  ],
  exports: []
})
export class ClonesModule { }
