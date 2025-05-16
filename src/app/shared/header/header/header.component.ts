import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [
    MenubarModule,
    ButtonModule,
    BadgeModule,
    SplitButtonModule,
    CarouselModule,
    TagModule,
    RatingModule,
    AvatarModule,
    InputTextModule,
     CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 isMobileMenuOpen = false;
  cartCount = 0;
  wishlistCount = 0;

  items: MenuItem[] = [
    {
      label: 'Sign In',
      icon: 'pi pi-sign-in',
      routerLink: '/login'
    },
    {
      label: 'Sign Up',
      icon: 'pi pi-user-plus',
      routerLink: '/register'
    }
  ];

  constructor() {
    // You can initialize your cart and wishlist counts here
    // For example, from a service
    this.cartCount = 3; // Example value
    this.wishlistCount = 2; // Example value
  }
}