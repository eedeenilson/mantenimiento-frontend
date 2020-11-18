import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertEquipoPageRoutingModule } from './insert-equipo-routing.module';

import { InsertEquipoPage } from './insert-equipo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertEquipoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [InsertEquipoPage]
})
export class InsertEquipoPageModule { }
