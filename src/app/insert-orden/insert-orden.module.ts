import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertOrdenPageRoutingModule } from './insert-orden-routing.module';

import { InsertOrdenPage } from './insert-orden.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertOrdenPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [InsertOrdenPage]
})
export class InsertOrdenPageModule { }
