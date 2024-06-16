import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-alumno-tutor',
  templateUrl: './alumno-tutor.component.html',
  styleUrls: ['./alumno-tutor.component.css']
})
export class AlumnoTutorComponent {
  datos: any = {}; // Ajusta este objeto según tus necesidades

  constructor(private router: Router, private dataService: DataService) {}

  cancelar() {
    this.router.navigate(['/']); // Navega de vuelta al inicio
  }

  // Elimina o corrige este método según tus necesidades
  guardar() {
    // Ajusta la lógica aquí según tus necesidades
    console.log('Datos guardados:', this.datos);
  }
}
