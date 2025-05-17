import { Component } from '@angular/core';
import { NavBarComponent } from "../../elements/nav-bar/nav-bar.component";
import { SaleBarComponent } from "../../elements/sale-bar/sale-bar.component";
import { Content1Component } from "../../elements/content1/content1.component";
import { FooterComponent } from "../../elements/footer/footer.component";
import { CategoriesComponent } from "../component/categories/categories.component";
import { FeaturedProductsComponent } from "../component/featured-products/featured-products.component";
import { BannerComponent } from "../component/banner/banner.component";
import { TestimonialsComponent } from "../component/testimonials/testimonials.component";
import { NewsletterComponent } from "../component/newsletter/newsletter.component";

@Component({
  selector: 'app-landing-page',
  imports: [NavBarComponent, SaleBarComponent, Content1Component, FooterComponent, CategoriesComponent, FeaturedProductsComponent, BannerComponent, TestimonialsComponent, NewsletterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
