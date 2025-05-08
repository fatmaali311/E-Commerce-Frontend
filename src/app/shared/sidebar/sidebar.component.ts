import { Component, Input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SettingComponent } from '../setting/setting.component';

@Component({
  selector: 'app-sidebar',
  imports: [ CommonModule,
    AvatarModule,RouterLink,RouterLinkActive,RouterOutlet,SettingComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() navigationMenu: any[] = [];
  userData:any = {
    name: 'Amy Elsner',
    role: 'Admin',
    avatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
  };
  isSettingsDropdownOpen: boolean = false;

  toggleSettingsDropdown(): void {
    this.isSettingsDropdownOpen = !this.isSettingsDropdownOpen;
  }
}
