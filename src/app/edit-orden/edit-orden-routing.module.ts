import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditOrdenPage } from './edit-orden.page';

const routes: Routes = [
  {
    path: '',
    component: EditOrdenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditOrdenPageRoutingModule {}
