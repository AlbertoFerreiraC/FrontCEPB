import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { ArancelComponent } from './arancel/arancel.component';
import { AlumnoTutorComponent } from './alumno-tutor/alumno-tutor.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { TutorComponent } from './tutor/tutor.component';
import { ListInscripcionesComponent } from './list-inscripciones/list-inscripciones.component';
import { FichaInscripcionComponent } from './ficha-inscripcion/ficha-inscripcion.component'; // Importar el componente FichaInscripcionComponent

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'arancel', component: ArancelComponent },
  { path: 'alumno-tutor', component: AlumnoTutorComponent },
  { path: 'inscripcion', component: InscripcionComponent },
  { path: 'alumno', component: AlumnoComponent },
  { path: 'lista-inscripcion', component: ListInscripcionesComponent },
  { path: 'tutor', component: TutorComponent },
  { path: 'ficha-inscripcion', component: FichaInscripcionComponent }, // Ruta para ficha-inscripcion sin parámetros
  { path: 'ficha-inscripcion/:inscripciones', component: FichaInscripcionComponent }, // Ruta con parámetro para recibir datos de inscripciones
  { path: '**', redirectTo: '/' } // Ruta por defecto en caso de ruta no encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
