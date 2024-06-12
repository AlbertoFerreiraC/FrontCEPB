import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InscribirComponent } from './inscribir/inscribir.component';
import { FichaComponent } from './ficha/ficha.component';
import { ArancelComponent } from './arancel/arancel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InscribirComponent,
    FichaComponent,
    ArancelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
