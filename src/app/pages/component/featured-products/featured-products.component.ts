import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product';

import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { TruncatePipe } from '../../../truncate.pipe';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    CarouselModule,
    RatingModule,
    FormsModule,
    TruncatePipe,
    MessageModule,
    RouterLink
  ],
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {
  featuredProducts: any[] = [];
  isLoading: boolean = true;
  errorMessage: string | null = null;

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadFeaturedProducts();
  }

  loadFeaturedProducts(): void {
    this.isLoading = true;
    this.errorMessage = null;

    this.productService.getProducts().subscribe({
      next: (response: any) => {
        const products = Array.isArray(response) ? response : (response.data || []);

        if (!Array.isArray(products)) {
          throw new Error('Invalid products data format');
        }

        this.featuredProducts = products
          .filter((product: Product) =>
            product.isFeatured &&
            product.approvalStatus === 'approved' &&
            product.isActive
          )
          .map((product: Product) => ({
            id: product._id,
            name: product.name,
            description: product.description,
            price: product.salePrice || product.price,
            originalPrice: product.salePrice ? product.price : null,
            image: product.images?.[0] || 'assets/images/placeholder-product.png',
            rating: product.averageRating || 0,
            isFavorite: false,
            discount: product.salePrice
              ? `${Math.round(((product.price - product.salePrice) / product.price) * 100)}% OFF`
              : null,
            isNew: this.isNewProduct(product.createdAt)
          }));

        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load featured products. Please try again later.';
        this.featuredProducts = [];
        this.isLoading = false;
      }
    });
  }

  private isNewProduct(createdAt: string): boolean {
    try {
      const createdDate = new Date(createdAt);
      const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
      return createdDate > thirtyDaysAgo;
    } catch {
      return false;
    }
  }

  toggleWishlist(product: any, event: Event): void {
    event.stopPropagation();
    product.isFavorite = !product.isFavorite;
  }

  viewProduct(product: any): void {
    this.router.navigate(['/products/details', product.id]);
  }

  addToCart(product: any, event: Event): void {
    event.stopPropagation();
  }
}
