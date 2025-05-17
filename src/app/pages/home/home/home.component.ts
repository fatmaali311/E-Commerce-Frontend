import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { SplitButtonModule } from 'primeng/splitbutton';
import { RatingModule } from 'primeng/rating';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { DecimalPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../shared/header/header/header.component';
import { MenuItem } from 'primeng/api';
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  isNew?: boolean;
  image: string;
  rating: number;
  isFavorite: boolean;
}

interface Category {
  name: string;
  icon: string;
  items: number;
}

interface Testimonial {
  name: string;
  rating: number;
  comment: string;
  image: string;
  status: string;
}
@Component({
  selector: 'app-home',
  imports: [FormsModule,
   
    MenubarModule,
    ButtonModule,
    BadgeModule,
    SplitButtonModule,
    RatingModule,
    AvatarModule,
    InputTextModule,
    TagModule,
  FormsModule,
    CarouselModule,
    MenubarModule,
    ButtonModule,
    BadgeModule,
    SplitButtonModule,
    RatingModule,
    AvatarModule,
    InputTextModule,
    TagModule,
    CommonModule,
    HeaderComponent

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
   encapsulation: ViewEncapsulation.None,
   standalone: true,
})



export class HomeComponent {
 title = 'nexus-ecommerce';

  // Header Data
  menuItems: MenuItem[] = [];
  userMenuItems: MenuItem[] = [];
  cartCount: number = 5;
  wishlistCount: number = 3;

  // Categories
  categories: Category[] = [
    {
      name: 'Fashion',
      icon: 'pi pi-shopping-bag',
      items: 200
    },
    {
      name: 'Electronics',
      icon: 'pi pi-desktop',
      items: 150
    },
    {
      name: 'Home Decor',
      icon: 'pi pi-home',
      items: 180
    },
    {
      name: 'Sports',
      icon: 'pi pi-heart-fill',
      items: 120
    }
  ];

  // Featured Products
  products: Product[] = [
    {
      id: 1,
      name: 'Nike Air Max',
      description: 'Men\'s Running Shoes',
      price: 129.99,
      originalPrice: 159.99,
      discount: '-20%',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      rating: 4.8,
      isFavorite: false
    },
    {
      id: 2,
      name: 'Smart Watch',
      description: 'Fitness Tracker with Heart Rate',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80',
      rating: 4.5,
      isFavorite: false
    },
    {
      id: 3,
      name: 'Wireless Headphones',
      description: 'Noise Cancelling Bluetooth',
      price: 179.99,
      isNew: true,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      rating: 4.9,
      isFavorite: false
    },
    {
      id: 4,
      name: 'Smartphone Pro',
      description: '128GB Storage, 8GB RAM',
      price: 899.99,
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
      rating: 4.7,
      isFavorite: false
    }
  ];

  // Testimonials
  testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'The quality of the products exceeded my expectations. Fast shipping and excellent customer service. Will definitely shop here again!',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      status: 'Verified Buyer'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      comment: 'I\'ve ordered multiple times from this store and I\'m always impressed with their selection and service. Highly recommend!',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      status: 'Verified Buyer'
    },
    {
      name: 'Emily Rodriguez',
      rating: 4.5,
      comment: 'Great prices and fast delivery. The product was exactly as described. Customer support was very helpful when I had questions.',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      status: 'Verified Buyer'
    }
  ];

  // Responsive options for carousels
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  ngOnInit() {
    this.initMenus();
  }

  initMenus() {
    // Main navigation menu
    this.menuItems = [
      {
        label: 'Home',
        routerLink: ['/']
      },
      {
        label: 'Shop',
        items: [
          { label: 'All Products' },
          { label: 'New Arrivals' },
          { label: 'Best Sellers' },
          { label: 'Sale Items' }
        ]
      },
      {
        label: 'About',
        routerLink: ['/about']
      },
      {
        label: 'Contact',
        routerLink: ['/contact']
      }
    ];

    // User menu items
    this.userMenuItems = [
      { label: 'Login', icon: 'pi pi-sign-in' },
      { label: 'Register', icon: 'pi pi-user-plus' },
      { label: 'Account', icon: 'pi pi-user' }
    ];
  }

  // Method to add product to cart
  addToCart(product: Product, event: Event) {
    event.preventDefault();
    this.cartCount++;

    // You would typically call a service here to add to cart

    // Show toast notification
    alert('Added to cart: ' + product.name);
  }

  // Method to toggle wishlist
  toggleWishlist(product: Product, event: Event) {
    event.preventDefault();
    product.isFavorite = !product.isFavorite;

    if (product.isFavorite) {
      this.wishlistCount++;
    } else {
      this.wishlistCount--;
    }

    // You would typically call a service here to update wishlist
  }

  // Method to view product details
  viewProduct(product: Product) {
    alert('View product details: ' + product.name);
    // In a real app, you would navigate to product details page
  }

  // Subscribe to newsletter
  subscribeNewsletter(email: string) {
    if (email && email.includes('@')) {
      alert('Thank you for subscribing with: ' + email);
    } else {
      alert('Please enter a valid email address');
    }
  }

  // Helper method to generate star rating array
  getRatingArray(rating: number): number[] {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars: number[] = [];

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(1);
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(0.5);
    }

    // Add empty stars to make 5 total
    while (stars.length < 5) {
      stars.push(0);
    }

    return stars;
  }
}
