import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { UserModule } from './pages/user/user.module';
import { HomeComponent } from './pages/home/home.component';
import { HomeModule } from './pages/home/home.module';

import { CursosModule } from './pages/cursos/cursos.module';




@NgModule({
  declarations: [
    DashboardComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    UserModule,
    HomeModule,
    CursosModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
