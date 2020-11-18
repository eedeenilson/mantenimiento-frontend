import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertOrdenPage } from './insert-orden.page';

const routes: Routes = [
  {
    path: '',
    component: InsertOrdenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertOrdenPageRoutingModule {}
