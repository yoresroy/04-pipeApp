import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = "Rodrigo";
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla'
  }

  //i18nPlural
  clientes : string[] = ['Maria','Pedro','Luis','Beto'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other' : 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    if ( this.genero === 'masculino' ){
      this.genero = 'femenino';
      this.nombre = 'Denise'
    } else {
      this.genero = 'masculino';
      this.nombre = 'Rodrigo';
    }
  }

  borrarCliente(){
    this.clientes.pop();
  }

}
