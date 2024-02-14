import { Injectable, Inject } from '@angular/core';

import { Observable, delay, mergeMap, of } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Usuarios } from '../../layouts/dashboard/pages/user/modelos/user';
import { environment } from '../../../enviroments/enviroment.prod';


const ROLES_DB: string[]=[
  'ADMIN',
  'USUARIO'
];


let USERS_DD: Usuarios[]= [
]; 


@Injectable({
  providedIn: 'root' // esto significa que por defaut nuetro servicio puede ser usado en toda la aplicacion
})
export class UsersService {

  constructor(private httpClient: HttpClient) {
    
  }

  

  getUsers(){ 
    return this.httpClient.get<Usuarios[]>(`${environment.apiURL}/user`).pipe(delay(2000))
  }

  getRoles(): Observable <string[]>{
    return of (ROLES_DB).pipe(delay(2000));
  }

  createUser(dataLoad: Usuarios){

    return this.httpClient.post<Usuarios[]>(`${environment.apiURL}/user`,dataLoad).pipe(
      mergeMap(()=> this.getUsers())
    )
  
  }

  deleteUser (userID: number){ 

    return this.httpClient.delete<Usuarios>(`${environment.apiURL}/user/${userID}`).pipe(
      mergeMap(()=> this.getUsers())
    )
  }

  getUserById(id:number | string): Observable<Usuarios | undefined>{
    
    return this.httpClient.get<Usuarios>(`${environment.apiURL}/user/${id}`);

  }
}