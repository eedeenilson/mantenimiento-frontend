import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-insert-procedimiento',
  templateUrl: './insert-procedimiento.page.html',
  styleUrls: ['./insert-procedimiento.page.scss'],
})
export class InsertProcedimientoPage implements OnInit {
  procedimientoForm: FormGroup
  constructor(
    public toastController: ToastController,
    public navController: NavController,
    public fb: FormBuilder,
    public http: HttpClient
  ) {
    this.procedimientoForm = fb.group({
      'txtProcedimiento': [null, Validators.required],
      'txtDescripcion': [null, Validators.required],
      'txtObservaciones': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  registrar() {
    let value = this.procedimientoForm.value;
    for (let c in this.procedimientoForm.controls) {
      this.procedimientoForm.controls[c].markAsTouched();
    }

    if (this.procedimientoForm.valid) {
      this.http.post(`${environment.urlApi}/procedimiento`, {

        "procedimiento": value.txtProcedimiento,
        "observaciones": value.txtObservaciones,
        "descripcion": value.txtDescripcion

      }).subscribe(
        data => {
          console.log("Se ha insertado");
          this.showToast()
          this.procedimientoForm.reset();
          this.navController.navigateRoot(['/tabs/procedimiento'])
        },
        error => {
          console.log("Error al ejecutar http get");
        }
      );
    }
  }

  limpiar() {
    this.navController.navigateRoot(['/tabs/tab1'])
  }

  showToast() {
    this.toastController.create({
      color: 'success',
      duration: 2000,
      header: 'Agregado',
      message: 'Nuevo equipo agregado',
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
