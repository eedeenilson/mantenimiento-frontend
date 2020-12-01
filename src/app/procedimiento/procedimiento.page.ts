import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-procedimiento',
  templateUrl: './procedimiento.page.html',
  styleUrls: ['./procedimiento.page.scss'],
})
export class ProcedimientoPage implements OnInit {

  procedimiento;
  constructor(
    public navController: NavController,
    public http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get(`${environment.urlApi}/procedimiento`, {
    }).subscribe(
      data => {
        this.procedimiento = data;
        this.procedimiento.reverse();
      },
      error => {
        console.log("Error al ejecutar http get");
      }
    );
  }

  nuevoProcedimiento() {
    this.navController.navigateRoot(['/insert-procedimiento/']);
  }
}
