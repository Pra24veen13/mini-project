import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfDetailsRoutingModule } from './prof-details-routing.module';
import { ProfDetailsComponent } from './prof-details.component';


@NgModule({
  declarations: [
    ProfDetailsComponent
  ],
  imports: [
    CommonModule,
    ProfDetailsRoutingModule
  ]
})
export class ProfDetailsModule { }
