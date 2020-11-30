import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertProcedimientoPage } from './insert-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: InsertProcedimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertProcedimientoPageRoutingModule {}
