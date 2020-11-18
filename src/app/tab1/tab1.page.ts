import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  equipo;
  constructor(
    private http: HttpClient,
    public navController: NavController
  ) {
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

  nuevoEquipo() {
    this.navController.navigateForward(['/insert-equipo']);
  }

}
