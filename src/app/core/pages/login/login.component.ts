import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterLink, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, CardModule,ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  _AuthService= inject(AuthService)
  _Router =inject (Router)
  apiError:string='';
  loginForm: FormGroup=new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)] ),
  })

  passwordMatchValidator(formGroup: any): { [key: string]: boolean } | null {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');
    return password && confirmPassword && password.value !== confirmPassword.value
      ? { passwordsMismatch: true }
      : null;
  }
  login(){
    console.log(this.loginForm.value);
    if(this.loginForm.valid){
      this._AuthService.login(this.loginForm.value).subscribe({
        next:(res)=>{
          console.log(res);
          localStorage.setItem('token', res.data.token)
          this._AuthService.saveUser()
          if(res.data.role==='admin')
          this._Router.navigate(['/admin/dashboard'])
          else if(res.data.role==='seller')
           this._Router.navigate(['/seller/dashboard'])
          else
          this._Router.navigate(['/home'])
        },
        error:(err)=>{
          console.log(err.error.message);
          this.apiError=err.error.error
        },
        complete() {
          console.log('complete');
        },
      })
    }else{
      this.loginForm.markAllAsTouched()
    }
  }
}
