import { Component, OnInit } from '@angular/core';
import { Heroe, Color } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {
  

  enMayusculas: boolean = false;
  ordenarPor: string = '';
  heroes: Heroe[] = [
    {
      nombre : 'Superman',
      vuela : true,
      color : Color.azul
    },
    {
      nombre : 'Batman',
      vuela : false,
      color : Color.negro
    },
    {
      nombre : 'Robin',
      vuela : true,
      color : Color.verde
    },
    {
      nombre : 'Daredevil',
      vuela : false,
      color : Color.rojo
    },
    {
      nombre : 'Linterna verde',
      vuela : true,
      color : Color.verde
    }
  ]

  cambiarMayusculas(){
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(valor:string){
    this.ordenarPor = valor;
    console.log(valor);
  }

}
