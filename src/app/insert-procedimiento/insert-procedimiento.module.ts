import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertProcedimientoPageRoutingModule } from './insert-procedimiento-routing.module';

import { InsertProcedimientoPage } from './insert-procedimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertProcedimientoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [InsertProcedimientoPage]
})
export class InsertProcedimientoPageModule { }
