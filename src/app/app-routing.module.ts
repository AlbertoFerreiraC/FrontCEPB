// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { ArancelComponent } from './arancel/arancel.component';
import { AlumnoTutorComponent } from './alumno-tutor/alumno-tutor.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'arancel', component: ArancelComponent },
  { path: 'alumno-tutor', component: AlumnoTutorComponent },
  { path: 'inscripcion', component: InscripcionComponent }, // Ruta para el componente de inscripción
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
