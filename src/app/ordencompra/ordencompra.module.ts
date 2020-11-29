import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdencompraPageRoutingModule } from './ordencompra-routing.module';

import { OrdencompraPage } from './ordencompra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdencompraPageRoutingModule
  ],
  declarations: [OrdencompraPage]
})
export class OrdencompraPageModule {}
