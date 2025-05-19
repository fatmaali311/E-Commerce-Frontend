import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminDashboardComponent } from "./dashboard/admin/admin-dashboard/admin-dashboard.component";
import { FooterComponent } from "./elements/footer/footer.component";
import { SaleBarComponent } from "./elements/sale-bar/sale-bar.component";
import { NavBarComponent } from "./elements/nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AdminDashboardComponent, FooterComponent, SaleBarComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce-project';
}
