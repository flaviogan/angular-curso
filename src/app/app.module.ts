import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { contadorModule } from './Contador/contador.module';
import { HeroesMudule } from './Heroes/Heroes.module';

@NgModule({
  declarations: [
    AppComponent   

  ],
  imports: [
    BrowserModule,
    HeroesMudule,
    contadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
