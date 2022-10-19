import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {
  
  nombreLower:string = 'rodrigo';
  nombreUpper:string = 'RODRIGO';
  nombreCompleto:string = 'RodRigO rUIz';
  fecha: Date = new Date();

}
