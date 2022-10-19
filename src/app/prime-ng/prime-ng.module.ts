import { NgModule } from '@angular/core';

//PRIME NG
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {MenubarModule} from 'primeng/menubar';




@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
  ]

})
export class PrimeNgModule { }
