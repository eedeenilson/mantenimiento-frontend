import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-ordentrabajo',
  templateUrl: './ordentrabajo.page.html',
  styleUrls: ['./ordentrabajo.page.scss'],
})
export class OrdentrabajoPage implements OnInit {

  ordenes;
  ordenTrabajo = [];
  constructor(
    private http: HttpClient,
    public navController: NavController
  ) {

    this.http.get(`${environment.urlApi}/ordentrabajo/ordenes`, {
    }).subscribe(
      data => {
        this.ordenes = data;
        this.ordenes.reverse()
        for (const iterator of this.ordenes) {
          iterator.fechaGeneracion = iterator.fechaGeneracion.slice(0, -5);
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

  editOrden(id) {
    this.navController.navigateRoot(['/edit-orden/'], { queryParams: { id: id } });
  }


}
