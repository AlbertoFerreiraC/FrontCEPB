import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Alumno } from '../models/alumno.model';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent {
  alumno: Alumno = {
    alum_id: 0,
    alum_ci: '',
    alum_nom: '',
    alum_ape: '',
    alum_fecha_nac: new Date(),
    alum_edad: 0
  };

  constructor(private router: Router, private dataService: DataService) {}

  // Método para cancelar y volver atrás
  cancelar() {
    this.router.navigate(['/']); // Navega de vuelta al inicio
  }

  // Método para guardar el alumno
  guardarAlumno() {
    // Calcular la edad a partir de la fecha de nacimiento
    this.alumno.alum_edad = this.calcularEdad(this.alumno.alum_fecha_nac);

    // Llamar al servicio para guardar el alumno
    this.dataService.guardarAlumno(this.alumno).subscribe(
      (response) => {
        console.log('Alumno guardado exitosamente:', response);
        // Aquí puedes redirigir a una página de éxito o realizar otras acciones
      },
      (error) => {
        console.error('Error al guardar alumno:', error);
        // Aquí puedes manejar errores, mostrar mensajes al usuario, etc.
      }
    );
  }

  // Método para calcular la edad basada en la fecha de nacimiento
  calcularEdad(fechaNacimiento: Date): number {
    const hoy = new Date();
    const fechaNac = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
      edad--;
    }

    return edad;
  }
}
