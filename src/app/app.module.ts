import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { contadorComponent } from './Contador/contador/contador.component';
import { HeroesMudule } from './Heroes/Heroes.module';


@NgModule({
  declarations: [
    AppComponent,
    contadorComponent,

  ],
  imports: [
    BrowserModule,
    HeroesMudule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
