import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/persona';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;
  formularioDos: FormGroup;
  formularioTres: FormGroup;
  personaUno: Persona;
  personaDos: Persona;
  personaTres: Persona = new Persona();
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.resetFormulario();
  }
  resetFormulario(): void {
    this.formulario = this.fb.group({
      nombre: ["", Validators.required],
      edad: [0, Validators.required],
      sexo: ["H", Validators.required],
      peso: [0, Validators.required],
      altura: [0, Validators.required]
    });
    this.formularioDos = this.fb.group({
      nombre: ["", Validators.required],
      edad: [0, Validators.required],
      sexo: ["H", Validators.required],
    });
    this.formularioTres = this.fb.group({
      nombre: ["", Validators.required],
      edad: [0, Validators.required],
      sexo: ["H", Validators.required],
      peso: [0, Validators.required],
      altura: [0, Validators.required]
    });
  }
  guardarUno() {
    if (!this.formulario.valid) return alert("Verifica los datos")
    this.personaUno = new Persona(this.formulario.value.nombre, this.formulario.value.edad, this.formulario.value.sexo, this.formulario.value.peso, this.formulario.value.altura)
  }
  guardarDos() {
    if (!this.formularioDos.valid) return alert("Verifica los datos")
    this.personaDos = new Persona(this.formularioDos.value.nombre, this.formularioDos.value.edad, this.formularioDos.value.sexo)
  }
  guardarTres() {
    if (!this.formularioTres.valid) return alert("Verifica los datos")
    this.personaTres.setNombre(this.formularioTres.value.nombre)
    this.personaTres.setAltura(this.formularioTres.value.altura)
    this.personaTres.setEdad(this.formularioTres.value.edad)
    this.personaTres.setPeso(this.formularioTres.value.peso)
    this.personaTres.setSexo(this.formularioTres.value.sexo)
  }

}
