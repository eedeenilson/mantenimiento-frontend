import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  proveedores
  constructor(
    private http: HttpClient,
    private navController: NavController
  ) {
    this.http.get(`${environment.urlApi}/proveedores`, {
    }).subscribe(
      data => {
        this.proveedores = data;
        this.proveedores.reverse();
        console.log(this.proveedores);

      },
      error => {
        console.log("Error al ejecutar http get");
      }
    );
  }
  nuevoProveedor() {
    this.navController.navigateRoot(['/insert-proveedor']);
  }

}
