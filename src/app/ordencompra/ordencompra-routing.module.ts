import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdencompraPage } from './ordencompra.page';

const routes: Routes = [
  {
    path: '',
    component: OrdencompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdencompraPageRoutingModule {}
