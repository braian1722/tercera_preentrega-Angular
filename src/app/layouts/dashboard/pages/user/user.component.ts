import { Component } from '@angular/core';
import { Usuarios } from './modelos/user';
import { UsersService } from '../../../../core/servicios/usuarios.service';
import { LoaginService } from '../../../../core/servicios/login.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'password', 'role','assignment','acciones'];

  dataSource: Usuarios[] =[];
  rolesData: string[] = [];

  
  constructor(private userService: UsersService, private loginService: LoaginService ){ // inyectamos el servicio con el constructor
        
  }
  ngOnInit(): void {
    this.getPageData();

  }

  getPageData(): void{
    this.loginService.setIsLogin(true);
    
    forkJoin([
      this.userService.getRoles(),
      this.userService.getUsers()
    ]).subscribe({
      next: (value) =>{
        this.rolesData = value[0];
        this.dataSource = value[1];
        
      },
      complete: ()=>{
        this.loginService.setIsLogin(false);
      }
    }) 

  }

  onUserSudmited(evento: Usuarios): void{ 
    this.loginService.setIsLogin(true);
    this.userService.createUser(evento).subscribe({
      next:(users)=>{
        this.dataSource = [...users];//le damos un nuevo array
      },
      complete:()=>{
        this.loginService.setIsLogin(false);
      }
    })
  }

  onDeleteUser(evento:Usuarios){  
    this.loginService.setIsLogin(true);
    
    this.userService.deleteUser(evento.id).subscribe({
      next:(users)=>{
        this.dataSource = [...users];
      },
      complete:()=>{
        this.loginService.setIsLogin(false);
      }
    })
  }
}
