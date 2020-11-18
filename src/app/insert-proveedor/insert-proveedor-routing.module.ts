import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertProveedorPage } from './insert-proveedor.page';

const routes: Routes = [
  {
    path: '',
    component: InsertProveedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertProveedorPageRoutingModule {}
