import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {
  relaciones: any[] = [];
  relacionSeleccionada: any = null; // Inicializar como null

  habilitado: boolean = false;
  fechaInscripcion: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.cargarRelacionesTutorAlumno();
  }

  cargarRelacionesTutorAlumno(): void {
    this.dataService.getTutorAlumno().subscribe(
      (relaciones: any[]) => {
        this.relaciones = relaciones.map(relacion => ({
          id: relacion.id,
          tutorId: relacion.tutor.tut_id,
          alumnoId: relacion.alumno.alum_id,
          nombreCompleto: `${relacion.tutor.tut_nom} ${relacion.tutor.tut_ape} / ${relacion.alumno.alum_nom} ${relacion.alumno.alum_ape}`
        }));
      },
      (error) => {
        console.error('Error al cargar las relaciones Tutor-Alumno:', error);
      }
    );
  }

  cancelar(): void {
    console.log('Cancelar acción');
  }

  guardar(): void {
    if (!this.relacionSeleccionada || !this.relacionSeleccionada.alumnoId || !this.relacionSeleccionada.tutorId) {
      console.error('No se ha seleccionado una relación Tutor-Alumno válida.');
      return;
    }
  
    console.log('Relación Tutor-Alumno seleccionada:', this.relacionSeleccionada);
    console.log('Habilitado:', this.habilitado);
    console.log('Fecha de Inscripción:', this.fechaInscripcion);
  
    const data: any = {
      alumno: this.relacionSeleccionada.alumnoId,
      tutor: this.relacionSeleccionada.tutorId,
      ins_contrato_fecha: this.fechaInscripcion,
      ins_periodo: '2024',  // Ajusta cómo obtienes el período en tu aplicación
      // Otros datos que necesites enviar
    };
  
    console.log('Datos a enviar:', data);
  
    this.dataService.crearInscripcion(data).subscribe(
      (response) => {
        console.log('Inscripción creada correctamente:', response);
        // Actualizar cualquier estado o redirigir después de guardar exitosamente
      },
      (error) => {
        console.error('Error al crear la inscripción:', error);
        if (error.error && typeof error.error === 'object' && error.error.detail) {
          console.error('Detalles del error:', error.error.detail);
        }
      }
    );
  }
  
}
