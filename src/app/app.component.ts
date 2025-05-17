import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminDashboardComponent } from "./dashboard/admin/admin-dashboard/admin-dashboard.component";
import { NavDashboardComponent } from './shared/nav-dashboard/nav-dashboard.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce-project';
}
