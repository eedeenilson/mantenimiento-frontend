import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertRHPageRoutingModule } from './insert-rh-routing.module';

import { InsertRHPage } from './insert-rh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertRHPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [InsertRHPage]
})
export class InsertRHPageModule { }
