import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';

import * as moment from 'moment';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-insert-orden',
  templateUrl: './insert-orden.page.html',
  styleUrls: ['./insert-orden.page.scss'],
})
export class InsertOrdenPage implements OnInit {
  ordenForm: FormGroup;
  equipo;
  recursoHumano;
  constructor(
    private http: HttpClient,
    fb: FormBuilder,
    public toastController: ToastController
  ) {
    this.ordenForm = fb.group({
      'cmbMantenimiento': [null, Validators.required],
      'cmbEquipo': [null, Validators.required],
      'cmbRecurso': [null, Validators.required],
      'txtObservaciones': [null, Validators.required]
    });
  }

  ngOnInit() {
    this.getEquipo();
    this.getRecursoHumano();
  }

  registrar() {

    console.log(this.ordenForm.value);

    let value = this.ordenForm.value;
    for (let c in this.ordenForm.controls) {
      this.ordenForm.controls[c].markAsTouched();
    }

    if (this.ordenForm.valid) {
      this.http.post(`${environment.urlApi}/ordentrabajo`, {
        fechaGeneracion: moment().format(),
        idEquipo: {
          idEquipo: value.cmbEquipo
        },
        idEstado: {
          idEstado: 1
        },
        idProcedimiento: {
          idProcedimiento: 1
        },
        idRecursoHumano: {
          idRecursoHumano: value.cmbRecurso
        },
        idTipoMantenimiento: {
          idTipoMantenimiento: value.cmbMantenimiento
        },
        observaciones: value.txtObservaciones
      }).subscribe(
        data => {
          console.log("Se ha insertado");
          this.showToast();
          this.ordenForm.reset();
        },
        error => {
          console.log("Error al ejecutar http post");
        }
      );
    }
  }

  limpiar() {
    this.ordenForm.reset();
  }

  getEquipo() {
    this.http.get(`${environment.urlApi}/equipo`, {

    }).subscribe(
      data => {
        this.equipo = data;
        console.log(this.equipo);

      },
      error => {
        console.log("Error al ejecutar http get");
      }
    );
  }

  getRecursoHumano() {
    this.http.get(`${environment.urlApi}/recursohumano`, {

    }).subscribe(
      data => {
        this.recursoHumano = data;
        console.log(this.recursoHumano);

      },
      error => {
        console.log("Error al ejecutar http get");
      }
    );
  }

  showToast() {
    this.toastController.create({
      color: 'success',
      duration: 2000,
      header: 'Agregado',
      message: 'Nueva orden de trabajo agregada',
      position: 'middle',
      cssClass: 'my-custom-class',
      buttons: [
        {
          side: 'end',
          text: 'Close',
          role: 'cancel',
          handler: () => {
            console.log('Alerta cerrada');
          }
        }
      ]
    }).then((obj) => {
      obj.present();
    });
  }

}
