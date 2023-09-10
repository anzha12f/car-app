import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarSearchComponent } from './car-search/car-search.component';
import { CarSearchHeaderComponent } from './car-search-header/car-search-header.component';

@NgModule({
  declarations: [
    AppComponent,
    CarSearchComponent,
    CarSearchHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
