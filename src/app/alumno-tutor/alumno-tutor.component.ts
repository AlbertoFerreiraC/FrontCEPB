// alumno-tutor.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service'; // Ajusta la ruta según la ubicación de tu servicio de datos
import { Alumno } from '../models/alumno.model'; // Ajusta la ruta según la ubicación de tu modelo Alumno
import { Tutor } from '../models/tutor.model'; // Ajusta la ruta según la ubicación de tu modelo Tutor

@Component({
  selector: 'app-alumno-tutor',
  templateUrl: './alumno-tutor.component.html',
  styleUrls: ['./alumno-tutor.component.css']
})
export class AlumnoTutorComponent implements OnInit {

  alumnos: Alumno[] = []; // Arreglo para almacenar los alumnos obtenidos de la base de datos
  tutores: Tutor[] = []; // Arreglo para almacenar los tutores obtenidos de la base de datos
  alumnoSeleccionado: number = 0; // Variable para almacenar el ID del alumno seleccionado
  tutorSeleccionado: number = 0; // Variable para almacenar el ID del tutor seleccionado

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    // Método que se ejecuta al inicializarse el componente
    this.cargarAlumnos();
    this.cargarTutores();
  }

  cargarAlumnos(): void {
    // Método para obtener la lista de alumnos desde el servicio
    this.dataService.getAlumnos().subscribe(
      (alumnos: Alumno[]) => {
        this.alumnos = alumnos;
      },
      (error) => {
        console.error('Error al cargar los alumnos:', error);
      }
    );
  }

  cargarTutores(): void {
    // Método para obtener la lista de tutores desde el servicio
    this.dataService.getTutores().subscribe(
      (tutores: Tutor[]) => {
        this.tutores = tutores;
      },
      (error) => {
        console.error('Error al cargar los tutores:', error);
      }
    );
  }

  cancelar(): void {
    // Función para cancelar, puedes redirigir a otra página o realizar otra acción necesaria
    console.log('Cancelar acción');
  }

  guardar(): void {
    // Función para guardar, aquí puedes redirigir según el alumno y tutor seleccionados
    console.log('Alumno seleccionado:', this.alumnoSeleccionado);
    console.log('Tutor seleccionado:', this.tutorSeleccionado);

    // Llamar al servicio para guardar la relación alumno-tutor en la base de datos
    this.dataService.guardarRelacionAlumnoTutor(this.alumnoSeleccionado, this.tutorSeleccionado).subscribe(
      (respuesta) => {
        console.log('Relación alumno-tutor guardada exitosamente:', respuesta);
        // Aquí podrías redirigir a otra página o mostrar un mensaje de éxito
      },
      (error) => {
        console.error('Error al guardar la relación alumno-tutor:', error);
        // Aquí podrías mostrar un mensaje de error al usuario
      }
    );
  }
}
