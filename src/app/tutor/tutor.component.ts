import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent {

  constructor(private router: Router) {}

  cancelar() {
    this.router.navigate(['/']);
  }

  guardarTutor() {
    console.log('Guardar tutor');
  }
}
