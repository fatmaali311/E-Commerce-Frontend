import { Component } from '@angular/core';
import { SidebarComponent } from '../../../shared/sidebar/sidebar.component';
import { NavDashboardComponent } from '../../../shared/nav-dashboard/nav-dashboard.component';
import { RouterOutlet } from '@angular/router';
import { KpiCardsComponent } from '../../admin/kpi-cards/kpi-cards.component';
import { ChartsComponent } from '../../admin/charts/charts.component';

@Component({
  selector: 'app-seller-dashboard',
  imports: [SidebarComponent, RouterOutlet, NavDashboardComponent,KpiCardsComponent, ChartsComponent],
  templateUrl: './seller-dashboard.component.html',
  styleUrl: './seller-dashboard.component.css'
})
export class SellerDashboardComponent {
  navigationMenu=[
    { name: 'Dashboard', icon: 'pi pi-fw pi-home', route: '/seller/dashboard' },
    { name: 'Products', icon: 'pi pi-fw pi-box', route: '/seller/products' },
  ]
}
