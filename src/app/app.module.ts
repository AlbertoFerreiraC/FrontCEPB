// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArancelComponent } from './arancel/arancel.component';
import { AlumnoTutorComponent } from './alumno-tutor/alumno-tutor.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component'; // Asegúrate de importar correctamente

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArancelComponent,
    AlumnoTutorComponent,
    InscripcionComponent,
    MenuBarComponent // Añade aquí el componente app-menu-bar (si el nombre es MenuBarComponent)
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
