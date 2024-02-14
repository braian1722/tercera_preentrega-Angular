import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserdRoutingModule } from './user-routing.module';
import { UsersFormComponent } from './componentes/users-form/users-form.component';
import { SharedModule } from '../../../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';



@NgModule({
  declarations: [
    UserComponent,
    UsersFormComponent
  ],
  imports: [
    CommonModule,
    UserdRoutingModule,
    SharedModule,
    HttpClientModule,
    HttpClientTestingModule
  ],
  exports:[
    UserComponent,
    UsersFormComponent
  ]
})
export class UserModule { }
