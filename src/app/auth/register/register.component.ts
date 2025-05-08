import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, CardModule,ButtonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: any;
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: ['',[Validators.required , Validators.minLength(2), Validators.maxLength(20),Validators.pattern('^[a-zA-Z ]*$')]],
      lastName: ['',[Validators.required , Validators.minLength(2), Validators.maxLength(20),Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['',[Validators.required, Validators.email]],
      phone: ['', [Validators.required,Validators.pattern('^1[0-9]{9}$')]],
      password: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(formGroup: any): { [key: string]: boolean } | null {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');
    return password && confirmPassword && password.value !== confirmPassword.value
      ? { passwordsMismatch: true }
      : null;
  }
}
