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
      },
      (error) => {
        console.error('Error al cargar las inscripciones:', error);
      }
    );
  }

  guardar(): void {
    console.log('Arancel a guardar:', this.arancel);
    // Lógica para guardar el arancel utilizando el servicio DataService
    // this.dataService.guardarArancel(this.arancel).subscribe(...);
  }
}
