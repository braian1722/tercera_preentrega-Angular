import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./pages/home/home.component";


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [

      {
        path: 'home',
        component: HomeComponent,
      }, 
      {
        path: 'user',
        loadChildren:()=> import('./pages/user/user.module').then((m)=>m.UserModule)
      },
      {
        path: 'cursos',
        loadChildren: () => import('./pages/cursos/cursos.module').then((m)=> m.CursosModule)
      }
      
    ]
    
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }