
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';

const appRoutes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'list', component: ListComponent }
]

@NgModule({
  declarations: [AppComponent, NavComponent, SearchComponent, ListComponent],
  imports: [BrowserModule, HttpClientModule, CardModule, RouterModule.forRoot(appRoutes)],
  providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
