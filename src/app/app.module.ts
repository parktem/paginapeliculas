
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FirebaseApp } from '@angular/fire';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { ModalComponent } from './modal/modal.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { MovieService } from './service/movie.service';

const appRoutes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'list', component: ListComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'acceso', component: InicioSesionComponent }
]

@NgModule({
  declarations: [AppComponent, NavComponent, SearchComponent,
    ListComponent, ModalComponent, RegistroComponent, InicioSesionComponent],
  imports: [FormsModule, BrowserModule, HttpClientModule, CardModule, MatDialogModule,
    BrowserAnimationsModule, RouterModule.forRoot(appRoutes)],
    /* providers: [MovieService], */
  entryComponents: [ModalComponent],
bootstrap: [AppComponent]
})
export class AppModule { }
