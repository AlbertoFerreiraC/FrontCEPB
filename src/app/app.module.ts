// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Asegúrate de que FormsModule esté importado correctamente
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArancelComponent } from './arancel/arancel.component';
import { AlumnoTutorComponent } from './alumno-tutor/alumno-tutor.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { TutorComponent } from './tutor/tutor.component';
import { ListInscripcionesComponent } from './list-inscripciones/list-inscripciones.component';
import { FichaInscripcionComponent } from './ficha-inscripcion/ficha-inscripcion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArancelComponent,
    AlumnoTutorComponent,
    InscripcionComponent,
    MenuBarComponent,
    AlumnoComponent,
    TutorComponent,
    ListInscripcionesComponent,
    FichaInscripcionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Asegúrate de que FormsModule esté aquí
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
