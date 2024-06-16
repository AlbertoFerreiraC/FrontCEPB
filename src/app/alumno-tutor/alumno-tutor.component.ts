import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Alumno } from '../models/alumno.model';
import { Tutor } from '../models/tutor.model';

@Component({
  selector: 'app-alumno-tutor',
  templateUrl: './alumno-tutor.component.html',
  styleUrls: ['./alumno-tutor.component.css']
})
export class AlumnoTutorComponent implements OnInit {

  alumnos: Alumno[] = [];
  tutores: Tutor[] = [];
  alumnoSeleccionado: Alumno | null = null;
  tutorSeleccionado: Tutor | null = null;

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    this.cargarAlumnos();
    this.cargarTutores();
  }

  cargarAlumnos(): void {
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
    console.log('Cancelar acción');
  }

  guardar(): void {
    if (this.alumnoSeleccionado && this.tutorSeleccionado) {
      const data = {
        alumno: {
          alum_id: this.alumnoSeleccionado.alum_id,
          alum_ci: this.alumnoSeleccionado.alum_ci,
          alum_nom: this.alumnoSeleccionado.alum_nom,
          alum_ape: this.alumnoSeleccionado.alum_ape,
          alum_fecha_nac: this.alumnoSeleccionado.alum_fecha_nac,
          alum_edad: this.alumnoSeleccionado.alum_edad
        },
        tutor: {
          tut_id: this.tutorSeleccionado.tut_id,
          tut_ci: this.tutorSeleccionado.tut_ci,
          tut_tipo: this.tutorSeleccionado.tut_tipo,
          tut_nom: this.tutorSeleccionado.tut_nom,
          tut_ape: this.tutorSeleccionado.tut_ape,
          tut_tel: this.tutorSeleccionado.tut_tel,
          tut_direc: this.tutorSeleccionado.tut_direc,
          tut_mail: this.tutorSeleccionado.tut_mail
        }
      };

      // Registrar el cuerpo de la solicitud en la consola
      console.log('Body de la solicitud:', JSON.stringify(data));

      // Llamar al servicio para guardar la relación alumno-tutor en la base de datos
      this.dataService.guardarRelacionAlumnoTutor(data).subscribe(
        (respuesta) => {
          console.log('Relación alumno-tutor guardada exitosamente:', respuesta);
          // Aquí podrías redirigir a otra página o mostrar un mensaje de éxito
        },
        (error) => {
          console.error('Error al guardar la relación alumno-tutor:', error);
          // Aquí podrías mostrar un mensaje de error al usuario
        }
      );
    } else {
      console.error('Alumno o tutor no seleccionados.');
    }
  }
}
