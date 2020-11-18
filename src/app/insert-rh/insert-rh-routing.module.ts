import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertRHPage } from './insert-rh.page';

const routes: Routes = [
  {
    path: '',
    component: InsertRHPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertRHPageRoutingModule {}
