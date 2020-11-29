import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertCompraPageRoutingModule } from './insert-compra-routing.module';

import { InsertCompraPage } from './insert-compra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertCompraPageRoutingModule
  ],
  declarations: [InsertCompraPage]
})
export class InsertCompraPageModule {}
