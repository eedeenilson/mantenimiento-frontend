import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { environment } from '../../environments/environment';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-insert-proveedor',
  templateUrl: './insert-proveedor.page.html',
  styleUrls: ['./insert-proveedor.page.scss'],
})
export class InsertProveedorPage implements OnInit {
  proveedorForm: FormGroup;
  constructor(
    private http: HttpClient,
    fb: FormBuilder,
    public navController: NavController,
    public toastController: ToastController
  ) {
    this.proveedorForm = fb.group({
      'txtProveedor': [null, Validators.required],
      'txtDireccion': [null, Validators.required],
      'txtTelefono': [null, Validators.required],
      'txtObservaciones': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  registrar() {

    let value = this.proveedorForm.value;
    for (let c in this.proveedorForm.controls) {
      this.proveedorForm.controls[c].markAsTouched();
    }

    if (this.proveedorForm.valid) {
      this.http.post(`${environment.urlApi}/proveedores`, {
        "proveedor": value.txtProveedor,
        "direccion": value.txtDireccion,
        "telefono": value.txtTelefono,
        "observaciones": value.txtObservaciones
      }).subscribe(
        data => {
          console.log("Se ha insertado");
          this.showToast();
          this.proveedorForm.reset();
          this.navController.navigateRoot(['/tabs/tab3']);
        },
        error => {
          console.log("Error al ejecutar http get");
        }
      );
    }
  }

  limpiar() {
    this.navController.navigateRoot(['/tabs/tab3']);
  }

  showToast() {
    this.toastController.create({
      color: 'success',
      duration: 2000,
      header: 'Agregado',
      message: 'Nuevo proveedor agregado',
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
