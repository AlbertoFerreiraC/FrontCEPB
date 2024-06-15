import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service'; // Importa el servicio DataService

@Component({
  selector: 'app-alumno-tutor',
  templateUrl: './alumno-tutor.component.html',
  styleUrls: ['./alumno-tutor.component.css']
})
export class AlumnoTutorComponent {
  mostrarCamposTutor: boolean = false;
  datos: any = {
    nombre: '',
    apellido: '',
    cedula:'',
    fechaNacimiento: '',
    direccion: '',
    telefono: '',
    correo: '',
    fechaInscripcion: '',
    tutor: null
  };

  constructor(private router: Router, private dataService: DataService) {}

  toggleMostrarCamposTutor() {
    this.mostrarCamposTutor = !this.mostrarCamposTutor;

    if (this.mostrarCamposTutor) {
      // Scroll hacia abajo un 10% de la altura de la ventana
      window.scrollBy(0, window.innerHeight * 0.1);
    }
  }

  cancelar() {
    this.router.navigate(['/']);
  }

  guardar() {
    if (this.mostrarCamposTutor) {
      this.datos.tutor = {
        nombre: (document.getElementById('nombreTutor') as HTMLInputElement).value,
        apellido: (document.getElementById('apellidoTutor') as HTMLInputElement).value,
        cedula: (document.getElementById('cedulaTutor') as HTMLInputElement).value,
        telefono: (document.getElementById('telefonoTutor') as HTMLInputElement).value,
        correo: (document.getElementById('correoTutor') as HTMLInputElement).value,
        direccion: (document.getElementById('direccionTutor') as HTMLInputElement).value,
        relacion: (document.getElementById('relacionTutor') as HTMLSelectElement).value
      };
    }

    this.datos.nombre = (document.getElementById('nombre') as HTMLInputElement).value;
    this.datos.apellido = (document.getElementById('apellido') as HTMLInputElement).value;
    this.datos.cedula = (document.getElementById('cedula') as HTMLInputElement).value;
    this.datos.fechaNacimiento = (document.getElementById('fechaNacimiento') as HTMLInputElement).value;
    this.datos.direccion = (document.getElementById('direccion') as HTMLInputElement).value;
    this.datos.telefono = (document.getElementById('telefono') as HTMLInputElement).value;
    this.datos.correo = (document.getElementById('correo') as HTMLInputElement).value;
    this.datos.fechaInscripcion = (document.getElementById('fechaInscripcion') as HTMLInputElement).value;

    // Llamar al servicio DataService para guardar los datos
    this.dataService.guardarDatos(this.datos).subscribe(
      response => {
        console.log('Datos guardados exitosamente:', response);
        // Redirigir a la página de ficha o a donde sea necesario
        this.router.navigate(['/ficha'], { queryParams: { datos: JSON.stringify(this.datos) } });
      },
      error => {
        console.error('Error al guardar los datos:', error);
        // Manejar el error apropiadamente
      }
    );
  }
}
