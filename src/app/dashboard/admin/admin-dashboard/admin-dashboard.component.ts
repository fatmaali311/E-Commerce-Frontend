import { Component } from '@angular/core';
import { SidebarComponent } from "../../../shared/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';
import { NavDashboardComponent } from "../../../shared/nav-dashboard/nav-dashboard.component";
import { KpiCardsComponent } from "../kpi-cards/kpi-cards.component";
import { ChartsComponent } from "../charts/charts.component";

@Component({
  selector: 'app-admin-dashboard',
  imports: [SidebarComponent, RouterOutlet, NavDashboardComponent, KpiCardsComponent, ChartsComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  navigationMenu=[
    { name: 'Dashboard', icon: 'pi pi-fw pi-home', route: 'admin/dashboard' },
    { name: 'Users', icon: 'pi pi-fw pi-users', route: 'admin/users' },
    { name: 'Sellers', icon: 'pi pi-fw pi-user-plus', route: 'admin/sellers' },
    { name: 'Products', icon: 'pi pi-fw pi-box', route: 'admin/products' },
    { name: 'Category', icon: 'pi pi-fw pi-tags', route: 'admin/category' },
  ]
}
