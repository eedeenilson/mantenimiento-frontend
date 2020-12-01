import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-ordentrabajo-inactivas',
  templateUrl: './ordentrabajo-inactivas.page.html',
  styleUrls: ['./ordentrabajo-inactivas.page.scss'],
})
export class OrdentrabajoInactivasPage implements OnInit {
  ordenes;
  ordenTrabajo = [];
  constructor(
    private http: HttpClient
  ) {
    this.http.get(`${environment.urlApi}/ordentrabajo/ordenes`, {
    }).subscribe(
      data => {
        this.ordenes = data;
        this.ordenes.reverse()
        for (const iterator of this.ordenes) {
          iterator.fechaGeneracion = iterator.fechaGeneracion.slice(0, -5);
          iterator.fechaActualizacion ? iterator.fechaActualizacion = iterator.fechaActualizacion.slice(0, -5) : "1970-01-01 00:00:00"
          this.ordenTrabajo.push(iterator)
        }

        // console.log(this.ordenes);

      },
      error => {
        console.log("Error al ejecutar http get");
      }
    );
  }

  ngOnInit() {
  }

}
