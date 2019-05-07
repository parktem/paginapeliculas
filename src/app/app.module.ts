
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { ModalComponent } from './modal/modal.component';

const appRoutes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'list', component: ListComponent }
]

@NgModule({
  declarations: [AppComponent, NavComponent, SearchComponent, ListComponent, ModalComponent],
  imports: [BrowserModule, HttpClientModule, CardModule, MatDialogModule, BrowserAnimationsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  entryComponents: [ModalComponent],
bootstrap: [AppComponent]
})
export class AppModule { }
