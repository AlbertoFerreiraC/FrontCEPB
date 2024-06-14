// src/app/arancel/arancel.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-arancel',
  templateUrl: './arancel.component.html',
  styleUrls: ['./arancel.component.css']
})
export class ArancelComponent {
  arancel = {
    nivel: '',
    ciclo: '',
    especializacion: '',
    grado: '',
    turno: '',
    matricula: 500000, // Valor fijo
    cuota: 0
  };

  guardar() {
    console.log('Arancel guardado', this.arancel);
    // Aquí puedes agregar la lógica para guardar los datos del arancel
  }
}
