import { Component } from '@angular/core';
import { NavBarComponent } from '../../elements/nav-bar/nav-bar.component';
import { SaleBarComponent } from '../../elements/sale-bar/sale-bar.component';
import { FooterComponent } from '../../elements/footer/footer.component';

@Component({
  selector: 'app-about',
  imports: [NavBarComponent, SaleBarComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
