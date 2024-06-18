// arancel.component.ts

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-arancel',
  templateUrl: './arancel.component.html',
  styleUrls: ['./arancel.component.css']
})
export class ArancelComponent implements OnInit {
  arancel: any = {
    arancel_nivel: '',
    arancel_ciclo: '',
    arancel_especializacion: '',
    arancel_grado: '',
    arancel_turno: '',
    arancel_matricula: 500000,
    arancel_cuota: 0,
    inscripcion_id: null
  };

  inscripciones: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.cargarInscripciones();
  }

  cargarInscripciones(): void {
    this.dataService.getInscripciones().subscribe(
      (inscripciones: any[]) => {
        this.inscripciones = inscripciones;
        console.log('Inscripciones cargadas:', this.inscripciones);
      },
      (error) => {
        console.error('Error al cargar las inscripciones:', error);
      }
    );
  }

  guardar(): void {
    console.log('Arancel a guardar:', this.arancel);
    this.dataService.guardarArancel(this.arancel).subscribe(
      (respuesta) => {
        console.log('Arancel guardado exitosamente:', respuesta);
        // Puedes añadir aquí lógica adicional como mostrar un mensaje de éxito o redirigir a otra página
      },
      (error) => {
        console.error('Error al guardar el arancel:', error);
        // Aquí puedes manejar errores, como mostrar un mensaje de error al usuario
      }
    );
  }
}
