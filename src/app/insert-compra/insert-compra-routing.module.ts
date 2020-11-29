import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertCompraPage } from './insert-compra.page';

const routes: Routes = [
  {
    path: '',
    component: InsertCompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertCompraPageRoutingModule {}
