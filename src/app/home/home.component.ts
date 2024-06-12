import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) { }

  navigateToInscribir() {
    console.log('Botón de inscribir clicado');
    this.router.navigate(['/inscribir']).then(success => {
      if (success) {
        console.log('Navegación exitosa');
      } else {
        console.log('Navegación fallida');
      }
    }).catch(err => {
      console.error('Error de navegación:', err);
    });
  }
}
