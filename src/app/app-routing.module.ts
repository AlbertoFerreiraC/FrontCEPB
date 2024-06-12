import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InscribirComponent } from './inscribir/inscribir.component';
import { FichaComponent } from './ficha/ficha.component';
import { ArancelComponent } from './arancel/arancel.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inscribir', component: InscribirComponent },
  { path: 'ficha', component: FichaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
