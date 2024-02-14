import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/servicios/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService){
    this.loginForm = this.fb.group({
      email: fb.control('',[Validators.email,Validators.required]),
      password: fb.control('',[Validators.required])
    })
  }

  onSubmit():void{
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
    }else{
      
      this.authService.login(this.loginForm.value)//llamamos al servicio y le mandamos la data requerida del formulario
    }
  }
}
