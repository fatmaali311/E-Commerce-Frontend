import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { MenuItem } from 'primeng/api';

// PrimeNG Modules
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { ToastModule } from 'primeng/toast';
import { TabViewModule } from 'primeng/tabview';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    GalleriaModule,
    ButtonModule,
    RatingModule,
    ToastModule,
    TabViewModule,
    ChipModule,
    TagModule,
    CardModule,
    ProgressSpinnerModule,
    DividerModule
  ],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [MessageService]
})
export class ProductDetailsComponent {
  product?: Product;
  loading = true;
  quantity = 1;
  selectedColor: string = '';
  availableColors: string[] = [];
  error: string | null = null;
  mainImage: string = '';
  isFavorite: boolean = false;
  zoomed = false;
  zoomPosition = { x: 0, y: 0 };

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.error = 'Product ID not provided';
      this.loading = false;
      return;
    }

    this.productService.getProductById(id).subscribe({
      next: (product) => {
        this.product = product;
        if (product?.images?.length) {
          this.mainImage = product.images[0];
        }
        if (product?.specifications?.color) {
          this.availableColors = product.specifications.color.split('/');
          this.selectedColor = this.availableColors[0];
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load product';
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to load product details'
        });
      }
    });
  }

  addToCart(): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Added to Cart',
      detail: `${this.product?.name} (${this.quantity}) has been added to your cart`,
      life: 3000
    });
  }

  buyNow(): void {
    this.messageService.add({
      severity: 'info',
      summary: 'Proceeding to Checkout',
      detail: 'Redirecting to checkout page',
      life: 3000
    });
  }

  selectColor(color: string): void {
    this.selectedColor = color;
  }

  getDiscountPercentage(): number {
    if (!this.product?.price || !this.product.salePrice) return 0;
    return Math.round(
      ((this.product.price - this.product.salePrice) / this.product.price * 100
    ))
  }

  incrementQuantity(): void {
    this.quantity++;
  }

  decrementQuantity(): void {
    if (this.quantity > 1) this.quantity--;
  }

  getReviewCount(): number {
    return this.product?.averageRating ? Math.round(this.product.averageRating * 10) : 0;
  }

  changeImage(image: string): void {
    this.mainImage = image;
    this.zoomed = false;
  }
   zoomConfig = {
    isZoomed: false,
    scale: 2,
    position: { x: 50, y: 50 }
  };

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
    const message = this.isFavorite ?
      `${this.product?.name} added to favorites` :
      `${this.product?.name} removed from favorites`;
    this.messageService.add({
      severity: 'success',
      summary: this.isFavorite ? 'Added to Favorites' : 'Removed from Favorites',
      detail: message,
      life: 3000
    });
  }

  toggleZoom(event: MouseEvent): void {
    this.zoomConfig.isZoomed = !this.zoomConfig.isZoomed;
    if (this.zoomConfig.isZoomed) {
      this.updateZoomPosition(event);
    }
  }

  updateZoomPosition(event: MouseEvent): void {
    const element = event.target as HTMLElement;
    const rect = element.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    this.zoomConfig.position = { x, y };
  }


  navigateToHome() {
    this.router.navigate(['/']);
  }
}
