import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleOneRoutingModule } from './module-one-routing.module';
import { ModuleOneComponent } from './module-one.component';
import { ButtonModule } from 'smartops-ui-core';

@NgModule({
  declarations: [ModuleOneComponent],
  imports: [
    CommonModule,
    ModuleOneRoutingModule,
    ButtonModule
  ]
})
export class ModuleOneModule { }
