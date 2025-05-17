import { Component } from '@angular/core';
import { NavBarComponent } from "../../elements/nav-bar/nav-bar.component";
import { SaleBarComponent } from "../../elements/sale-bar/sale-bar.component";
import { Content1Component } from "../../elements/content1/content1.component";
import { FooterComponent } from "../../elements/footer/footer.component";

@Component({
  selector: 'app-landing-page',
  imports: [NavBarComponent, SaleBarComponent, Content1Component, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
