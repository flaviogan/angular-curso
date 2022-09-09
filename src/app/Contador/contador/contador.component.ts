
import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
template: `
    <h1>{{ this.title}}</h1>
    <button (click)="acumular(base)">{{base}}</button>
    <span>{{numero}}</span>
    <button (click)="acumular(-base)">-{{base}}</button>
`
})
export class contadorComponent{
    title:string  = 'Contador app';
    numero:number = 10;
    base:number = 5;
  
    acumular(valor:number){
      this.numero += valor;
    }
}