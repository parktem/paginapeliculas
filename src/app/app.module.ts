import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { ShowComponent } from './show/show.component';
import { HttpClientModule } from '@angular/common/http';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [AppComponent, NavComponent, SearchComponent, ShowComponent],
  imports: [BrowserModule, HttpClientModule, CardModule],
  providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
