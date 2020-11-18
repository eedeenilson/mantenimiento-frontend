import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertEquipoPage } from './insert-equipo.page';

const routes: Routes = [
  {
    path: '',
    component: InsertEquipoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertEquipoPageRoutingModule {}
