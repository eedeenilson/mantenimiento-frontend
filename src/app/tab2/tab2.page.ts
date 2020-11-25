import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController, NavController } from '@ionic/angular';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  recursoHumano;
  constructor(
    private http: HttpClient,
    public loadingController: LoadingController,
    public navController: NavController
  ) {
    this.http.get(`${environment.urlApi}/recursohumano`, {
    }).subscribe(
      data => {
        this.recursoHumano = data;
        this.recursoHumano.reverse();
        console.log(this.recursoHumano);

      },
      error => {
        console.log("Error al ejecutar http get");
      }
    );
  }

  nuevoRecurso() {
    this.navController.navigateRoot(['/insert-rh']);
  }

}
