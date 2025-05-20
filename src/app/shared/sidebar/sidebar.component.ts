import { Component, inject, Input, input, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SettingComponent } from '../setting/setting.component';
import { AuthService } from '../../core/services/auth/auth.service';
import { firstValueFrom } from 'rxjs';

interface UserData {
  name: string;
  role: string;
  avatar: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule,
    AvatarModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    SettingComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  @Input() navigationMenu: any[] = [];

  role = input.required<string>();
  confirmedRole: string = '';

  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  userData: UserData = {
    name: 'Amy Elsner',
    role: 'Admin',
    avatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
  };

  isSettingsDropdownOpen = false;

  toggleSettingsDropdown(): void {
    this.isSettingsDropdownOpen = !this.isSettingsDropdownOpen;
  }

  private async getActualRole(): Promise<void> {
    try {
      const response = await firstValueFrom(this.authService.getRole());
      this.confirmedRole = response.data.role;
    } catch (error) {
      console.error('Error fetching role:', error);
      this.router.navigate(['/login']);
    }
  }

  private async verifyRole(): Promise<void> {
    await this.getActualRole();

    if (this.role() !== this.confirmedRole) {
      console.log(`Role mismatch: expected ${this.role()}, got ${this.confirmedRole}`);
      this.router.navigate(['invalid-credentials']);
    }
  }

  async ngOnInit(): Promise<void> {
    await this.verifyRole();
  }
}
