import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-insert-rh',
  templateUrl: './insert-rh.page.html',
  styleUrls: ['./insert-rh.page.scss'],
})
export class InsertRHPage implements OnInit {
  rhForm: FormGroup;
  constructor(
    private http: HttpClient,
    fb: FormBuilder
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
          this.rhForm.reset();
        },
        error => {
          console.log("Error al ejecutar http get");
        }
      );
    }
  }

  limpiar() {
    this.rhForm.reset();
  }
}