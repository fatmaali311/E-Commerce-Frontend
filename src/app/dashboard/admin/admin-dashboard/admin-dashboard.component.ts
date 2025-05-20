import { Component, ViewEncapsulation } from '@angular/core';
import { SidebarComponent } from "../../../shared/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-admin-dashboard',
  imports: [SidebarComponent, RouterOutlet,],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent {
  role:string='admin'
  navigationMenu=[
    { name: 'Dashboard', icon: 'pi pi-fw pi-home', route: '' },
    { name: 'Users', icon: 'pi pi-fw pi-users', route: 'users' },
    { name: 'Sellers', icon: 'pi pi-fw pi-user-plus', route: 'sellers' },
    { name: 'Products', icon: 'pi pi-fw pi-box', route: 'products' },
    { name: 'Category', icon: 'pi pi-fw pi-tags', route: 'categories'},
  ]
}
