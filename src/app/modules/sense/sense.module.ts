import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SenseRoutingModule } from './sense-routing.module';
import { SenseComponent } from './sense/sense.component';

@NgModule({
  declarations: [SenseComponent],
  imports: [
    CommonModule,
    SenseRoutingModule
  ]
})
export class SenseModule { }
