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
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  _AuthService= inject(AuthService)
  _Router =inject (Router)
  apiError:string='';
  registerForm: FormGroup=new FormGroup({
    firstName: new FormControl('', [Validators.required , Validators.minLength(2), Validators.maxLength(20),Validators.pattern('^[a-zA-Z ]*$')]),
    lastName: new FormControl('', [Validators.required , Validators.minLength(2), Validators.maxLength(20),Validators.pattern('^[a-zA-Z ]*$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required,Validators.pattern(`^01[0125][0-9]{8}$`)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)] ),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)] )
  })

  passwordMatchValidator(formGroup: any): { [key: string]: boolean } | null {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');
    return password && confirmPassword && password.value !== confirmPassword.value
      ? { passwordsMismatch: true }
      : null;
  }
  register(){
    console.log(this.registerForm.value);
    if(this.registerForm.valid){
      this._AuthService.register(this.registerForm.value).subscribe({
        next:(res)=>{
          console.log(res);
          this._Router.navigate(['/login'])

        },
        error:(err)=>{
          console.log(err.error);
          this.apiError=err.error.error
        },
        complete() {
          console.log('complete');
        },
      })
    }else{
      this.registerForm.markAllAsTouched()
    }
  }
}
