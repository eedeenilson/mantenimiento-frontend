import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-insert-rh',
  templateUrl: './insert-rh.page.html',
  styleUrls: ['./insert-rh.page.scss'],
})
export class InsertRHPage implements OnInit {
  rhForm: FormGroup;
  constructor(
    private http: HttpClient,
    fb: FormBuilder,
    public navController: NavController,
    public toastController: ToastController
  ) {
    this.rhForm = fb.group({
      'txtNombre': [null, Validators.required],
      'txtApellido': [null, Validators.required],
      'txtTelefono': [null, Validators.required],
      'txtObservaciones': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  registrar() {

    let value = this.rhForm.value;
    for (let c in this.rhForm.controls) {
      this.rhForm.controls[c].markAsTouched();
    }

    if (this.rhForm.valid) {
      this.http.post(`${environment.urlApi}/recursohumano`, {

        "apellido": value.txtApellido,
        "nombre": value.txtNombre,
        "observaciones": value.txtObservaciones,
        "telefono": value.txtTelefono

      }).subscribe(
        data => {
          console.log("Se ha insertado");
          this.showToast();
          this.rhForm.reset();
          this.navController.navigateRoot(['/tabs/tab2']);
        },
        error => {
          console.log("Error al ejecutar http get");
        }
      );
    }
  }

  limpiar() {
    this.navController.navigateRoot(['/tabs/tab2']);
  }

  showToast() {
    this.toastController.create({
      color: 'success',
      duration: 2000,
      header: 'Agregado',
      message: 'Nuevo recurso humano agregado',
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