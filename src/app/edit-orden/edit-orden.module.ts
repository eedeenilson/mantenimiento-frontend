import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditOrdenPageRoutingModule } from './edit-orden-routing.module';

import { EditOrdenPage } from './edit-orden.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditOrdenPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditOrdenPage]
})
export class EditOrdenPageModule { }
