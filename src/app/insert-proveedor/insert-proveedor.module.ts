import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertProveedorPageRoutingModule } from './insert-proveedor-routing.module';

import { InsertProveedorPage } from './insert-proveedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertProveedorPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [InsertProveedorPage]
})
export class InsertProveedorPageModule { }
