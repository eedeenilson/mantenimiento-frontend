import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-insert-equipo',
  templateUrl: './insert-equipo.page.html',
  styleUrls: ['./insert-equipo.page.scss'],
})
export class InsertEquipoPage implements OnInit {
  equipoForm: FormGroup;
  constructor(
    private http: HttpClient,
    fb: FormBuilder,
    public navController: NavController,
    public toastController: ToastController) {
    this.equipoForm = fb.group({
      'txtEquipo': [null, Validators.required],
      'txtCantidad': [null, Validators.required],
      'txtDescripcion': [null, Validators.required],
      'txtObservaciones': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  registrar() {
    let value = this.equipoForm.value;
    for (let c in this.equipoForm.controls) {
      this.equipoForm.controls[c].markAsTouched();
    }

    if (this.equipoForm.valid) {
      this.http.post(`${environment.urlApi}/equipo`, {

        "equipo": value.txtEquipo,
        "cantidad": value.txtCantidad,
        "observaciones": value.txtObservaciones,
        "descripcion": value.txtDescripcion

      }).subscribe(
        data => {
          console.log("Se ha insertado");
          this.showToast()
          this.equipoForm.reset();
          this.navController.navigateRoot(['/tabs/tab1'])
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
