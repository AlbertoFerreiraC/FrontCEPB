// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InscribirComponent } from './inscribir/inscribir.component';
import { ArancelComponent } from './arancel/arancel.component';
import { AlumnoTutorComponent } from './alumno-tutor/alumno-tutor.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InscribirComponent,
    ArancelComponent,
    AlumnoTutorComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Asegúrate de importar FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
