import { Component } from '@angular/core';
import { NavBarComponent } from "../../elements/nav-bar/nav-bar.component";
import { SaleBarComponent } from '../../elements/sale-bar/sale-bar.component';
import { FooterComponent } from '../../elements/footer/footer.component';

@Component({
  selector: 'app-products',
  imports: [NavBarComponent, SaleBarComponent, FooterComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
