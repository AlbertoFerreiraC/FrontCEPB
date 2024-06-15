// tutor.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Tutor } from '../models/tutor.model';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent {
  tutor: Tutor = {
    tut_id: 0,
    tut_ci: '',
    tut_tipo: '',
    tut_nom: '',
    tut_ape: '',
    tut_tel: '',
    tut_direc: '',
    tut_mail: ''
  };

  constructor(private router: Router, private dataService: DataService) {}

  cancelar() {
    this.router.navigate(['/']); // Navega de vuelta al inicio
  }

  guardarTutor() {
    this.dataService.guardarTutor(this.tutor).subscribe(
      (response) => {
        console.log('Tutor guardado exitosamente:', response);
        // Aquí puedes redirigir a una página de éxito o realizar otras acciones
      },
      (error) => {
        console.error('Error al guardar tutor:', error);
        // Aquí puedes manejar errores, mostrar mensajes al usuario, etc.
      }
    );
  }
}
