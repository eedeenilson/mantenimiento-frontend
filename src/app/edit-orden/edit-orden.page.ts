import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { environment } from '../../environments/environment';
import * as moment from 'moment'

@Component({
  selector: 'app-edit-orden',
  templateUrl: './edit-orden.page.html',
  styleUrls: ['./edit-orden.page.scss'],
})
export class EditOrdenPage implements OnInit {
  queryData;
  orden;

  mantenimiento;
  equipo;
  falla;
  recursoHumano;
  fechaG;
  fechaAct;
  observaciones = "";
  proceso = 1;
  procedimientos;
  constructor(
    public activatedRoute: ActivatedRoute,
    public http: HttpClient,
    public toastController: ToastController,
    public navController: NavController
  ) {

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.queryData = data;
      console.log(this.queryData);
      this.getOrdenById(this.queryData.id);
      this.getProcedimintos();
    });
  }

  getOrdenById(id) {
    this.http.get(`${environment.urlApi}/ordentrabajo/ordenes/${id}`, {
    }).subscribe(
      data => {
        this.orden = data;
        console.log(this.orden);
        this.asignarOrden(this.orden);
      },
      error => {
        console.log("Error al ejecutar http get");
      }
    );
  }

  asignarOrden(orden) {
    this.mantenimiento = orden.idTipoMantenimiento.mantenimiento;
    this.equipo = orden.idEquipo.equipo;
    this.falla = orden.observaciones;
    this.recursoHumano = `${orden.idRecursoHumano.apellido} ${orden.idRecursoHumano.nombre}`
    this.fechaG = this.orden.fechaGeneracion.slice(0, -5);
    this.fechaAct = moment().format();
  }

  getProcedimintos() {
    this.http.get(`${environment.urlApi}/procedimiento`, {
    }).subscribe(
      data => {
        this.procedimientos = data;
        console.log(this.procedimientos);
      },
      error => {
        console.log("Error al ejecutar http get");
      }
    );
  }

  limpiar() {
    this.navController.navigateRoot(['/ordentrabajo'])
  }

  editar() {
    let newOrden = {
      fechaActualizacion: this.fechaAct,
      fechaGeneracion: this.fechaG,
      idEquipo: {
        idEquipo: this.orden.idEquipo.idEquipo
      },
      idEstado: {
        idEstado: 2
      },
      idOrdenTrabajo: this.orden.idOrdenTrabajo,
      idRecursoHumano: {
        idRecursoHumano: this.orden.idRecursoHumano.idRecursoHumano
      },
      idTipoMantenimiento: {
        idTipoMantenimiento: this.orden.idTipoMantenimiento.idTipoMantenimiento
      },
      idProcedimiento: {
        idProcedimiento: this.proceso
      },
      observaciones: this.falla + " " + this.observaciones
    }
    this.http.put(`${environment.urlApi}/ordentrabajo/${this.orden.idOrdenTrabajo}`, newOrden).subscribe(
      data => {
        console.log("Se ha insertado");
        this.showToast();
        this.limpiar();
      },
      error => {
        console.log("Error al ejecutar http post");
      }
    );
  }

  showToast() {
    this.toastController.create({
      color: 'success',
      duration: 2000,
      header: 'Agregado',
      message: 'Orden de trabajo modificada',
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
