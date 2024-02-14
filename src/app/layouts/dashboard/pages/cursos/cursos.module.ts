import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { FormCursosComponent } from './componentes/form-cursos/form-cursos.component';
import { SharedModule } from '../../../../shared/shared.module';
import { CursosRoutingModule } from './cursos-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CursosComponent,
    FormCursosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CursosRoutingModule,
    HttpClientModule
  ],
  exports:[
    CursosComponent,
    FormCursosComponent
  ]
})
export class CursosModule { }
