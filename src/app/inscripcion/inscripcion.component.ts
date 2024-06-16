// src/app/inscripcion/inscripcion.component.ts

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; // Ajusta la ruta según la ubicación de tu servicio de datos
import { Tutor } from '../models/tutor.model'; // Asegúrate de importar correctamente tu interfaz Tutor

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {

  relaciones: any[] = []; // Arreglo para almacenar las relaciones Tutor-Alumno obtenidas del servicio
  relacionSeleccionada: number = 0; // Variable para almacenar el ID de la relación seleccionada
  habilitado: boolean = false; // Variable para almacenar el estado del checkbox
  fechaInscripcion: string = ''; // Variable para almacenar la fecha de inscripción

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Método que se ejecuta al inicializarse el componente
    this.cargarRelacionesTutorAlumno();
  }

  cargarRelacionesTutorAlumno(): void {
    // Método para obtener la lista de relaciones Tutor-Alumno desde el servicio
    this.dataService.getRelacionesTutorAlumno().subscribe(
      (relaciones: any[]) => {
        // Formatear las relaciones para mostrar nombreTutor-apellidoTutor / nombreAlumno-apellidoAlumno
        this.relaciones = relaciones.map(relacion => ({
          id: relacion.id, // Mantener el ID para el valor del selector
          nombreCompleto: `${relacion.tutor.tut_nom}-${relacion.tutor.tut_ape} / ${relacion.alumno.alu_nom}-${relacion.alumno.alu_ape}`
        }));
      },
      (error) => {
        console.error('Error al cargar las relaciones Tutor-Alumno:', error);
      }
    );
  }

  cancelar(): void {
    // Función para cancelar, puedes redirigir a otra página o realizar otra acción necesaria
    console.log('Cancelar acción');
  }

  guardar(): void {
    // Función para guardar la inscripción
    console.log('Relación Tutor-Alumno seleccionada:', this.relacionSeleccionada);
    console.log('Habilitado:', this.habilitado);
    console.log('Fecha de Inscripción:', this.fechaInscripcion);
    // Aquí puedes implementar la lógica para guardar la inscripción en la base de datos
  }
}
