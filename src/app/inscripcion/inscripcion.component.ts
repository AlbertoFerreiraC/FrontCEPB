// src/app/inscripcion/inscripcion.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent {
  estudiante = {
    nombre: '',
    apellido: '',
    cedula: '',
    fechaNacimiento: '',
    relacionAlumnoTutor: ''
    // Puedes agregar más campos según sea necesario
  };

  fechaInscripcion: string = ''; // Variable para almacenar la fecha de inscripción
  habilitado: boolean = false; // Variable para el checkbox de habilitado/no habilitado

  cancelar() {
    this.estudiante = {
      nombre: '',
      apellido: '',
      cedula: '',
      fechaNacimiento: '',
      relacionAlumnoTutor: ''
    };
    this.fechaInscripcion = '';
    this.habilitado = false;
  }

  guardar() {
    console.log('Datos de inscripción:', {
      estudiante: this.estudiante,
      fechaInscripcion: this.fechaInscripcion,
      habilitado: this.habilitado
    });
    // Aquí puedes agregar la lógica para guardar la inscripción
  }
}
