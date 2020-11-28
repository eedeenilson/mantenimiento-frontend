import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdentrabajoInactivasPage } from './ordentrabajo-inactivas.page';

const routes: Routes = [
  {
    path: '',
    component: OrdentrabajoInactivasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdentrabajoInactivasPageRoutingModule {}
