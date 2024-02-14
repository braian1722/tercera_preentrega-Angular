import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class LoaginService {

    // private logiantrigered$ = new Subject<boolean>();
    private logiantrigered$ = new BehaviorSubject<boolean>(false)// el behavior recive un valor inicial

    public  isLoading$ = this.logiantrigered$.asObservable()//conviente el sujec a un observable y nos permite aceder a sus propiedades

    setIsLogin(value: boolean):void{
        this.logiantrigered$.next(value);
        //le pasasmos el valor 
    }

}
