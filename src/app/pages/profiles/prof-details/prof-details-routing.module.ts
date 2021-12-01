import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfDetailsComponent } from './prof-details.component';

const routes: Routes = [{ path: '', component: ProfDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfDetailsRoutingModule { }
