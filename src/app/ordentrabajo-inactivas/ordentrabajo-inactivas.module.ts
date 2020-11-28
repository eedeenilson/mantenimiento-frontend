import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdentrabajoInactivasPageRoutingModule } from './ordentrabajo-inactivas-routing.module';

import { OrdentrabajoInactivasPage } from './ordentrabajo-inactivas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdentrabajoInactivasPageRoutingModule
  ],
  declarations: [OrdentrabajoInactivasPage]
})
export class OrdentrabajoInactivasPageModule {}
