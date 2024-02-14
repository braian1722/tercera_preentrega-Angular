import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, finalize, map, of, tap } from 'rxjs';
import { LoaginService } from './login.service';
import { Usuarios } from '../../layouts/dashboard/pages/user/modelos/user';


interface loginData {
  email: null | string ;
  password: null | string;
}

const MOCK_USER: Usuarios = {
  id: 1,
  firstName: 'braina',
  lastName: 'kandyba',
  email: 'b@gmail.com',
  password: 'Ab123',
  role: 'ADMIN',
  assignment: 'matematicas'
};

@Injectable({
  providedIn: 'root'
})



export class AuthService {

  authUser: Usuarios | null = null;


  constructor(private router: Router, private loginService: LoaginService) { }

  private setOutUser(MOCK_USER: Usuarios): void {
    this.authUser = MOCK_USER;
    localStorage.setItem(
      'token',
      '1231231423534fsdf21312'
      )
  }

  login(data: loginData): void{

    if(data.email === MOCK_USER.email && data.password === MOCK_USER.password){
      this.setOutUser(MOCK_USER)
      this.router.navigate(['dashboard','home']);//al ingresar lo mandamos al home
    }else{
      console.log('error')
    }
    

  }

  logOut(): void{
    this.authUser = null;
    this.router.navigate(['auth','login']); //redireccionamos y limpiamos el usuarario
    localStorage.removeItem('token');//borramos el token de acceso
  }

  verificarToke(){
    this.loginService.setIsLogin(true);
    return of(localStorage.getItem('token')).pipe(
      delay(1000),
      map((respuesta) => !!respuesta),
      
      tap(()=>{
        this.setOutUser(MOCK_USER)
      }),
      finalize(()=>{
        this.loginService.setIsLogin(false);
      })
    )

  }
}
