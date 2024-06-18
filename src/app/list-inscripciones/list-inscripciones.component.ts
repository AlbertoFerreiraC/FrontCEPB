import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router'; // Importar Router

@Component({
  selector: 'app-list-inscripciones',
  templateUrl: './list-inscripciones.component.html',
  styleUrls: ['./list-inscripciones.component.css']
})
export class ListInscripcionesComponent implements OnInit {
  inscripciones: any[] = [];
  filteredInscripciones: any[] = []; // Lista filtrada para mostrar en la tabla
  errorMessage: string = '';
  searchCedula: string = ''; // Variable para almacenar el número de cédula buscado

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getListaInscripciones();
  }

  getListaInscripciones(): void {
    this.dataService.getListaInscripciones().subscribe(
      (data: any[]) => {
        this.inscripciones = data.map(inscripcion => ({ ...inscripcion, selected: false }));
        this.filteredInscripciones = [...this.inscripciones]; // Inicialmente mostrar todas las inscripciones
      },
      (error) => {
        this.errorMessage = 'Ocurrió un error al obtener las inscripciones.';
        console.error('Error al obtener las inscripciones:', error);
      }
    );
  }

  // Función para filtrar las inscripciones por número de cédula del alumno
  filterInscripciones(): void {
    if (this.searchCedula.trim() === '') {
      this.filteredInscripciones = [...this.inscripciones]; // Mostrar todas las inscripciones si no hay búsqueda
    } else {
      // Convertir a minúsculas para asegurar la comparación sin distinción de mayúsculas/minúsculas
      const searchValue = this.searchCedula.trim().toLowerCase();
  
      this.filteredInscripciones = this.inscripciones.filter(inscripcion =>
        inscripcion.cedula.toLowerCase().includes(searchValue)
      );
    }
  }

  // Función para limpiar el filtro
  clearFilter(): void {
    this.searchCedula = '';
    this.filterInscripciones(); // Mostrar todas las inscripciones al limpiar el filtro
  }

  // Función para ver las inscripciones seleccionadas
  verInscripcionesSeleccionadas(): void {
    const inscripcionesSeleccionadas = this.inscripciones.filter(inscripcion => inscripcion.selected);
    
    // Redirigir a la página de ficha de inscripción y pasar datos como parámetro de ruta
    this.router.navigate(['/ficha-inscripcion', { inscripciones: JSON.stringify(inscripcionesSeleccionadas) }]);
  }
}
