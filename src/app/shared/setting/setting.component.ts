import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';
@Component({
  selector: 'app-setting',
  imports: [CommonModule,RouterLink],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {
  isOpen = false;
  _AuthService = inject(AuthService)
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
  logout():void{
    this._AuthService.logOut()
  }
}
