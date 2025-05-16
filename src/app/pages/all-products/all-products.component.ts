import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [
    CarouselModule,
    ButtonModule,
    RatingModule,
    ToastModule,
    CommonModule,
    FormsModule,
    PaginatorModule,
    DividerModule,
    RouterLink
  ],
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  products: Product[] = [];
  paginatedProducts: Product[] = [];
  categoryId: string | null = null;
  isLoading: boolean = true;

  // Pagination
  first: number = 0;
  rows: number = 8;
  totalRecords: number = 0;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) {}


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('categoryId');
      this.loadProducts();
    });
  }

  loadProducts(): void {
    this.isLoading = true;
    this.productService.getProducts().subscribe({
      next: (products: Product[]) => {
        this.products = products;

        if (this.categoryId) {
          this.products = this.products.filter((product) => {
            const productCategoryId =
              typeof product.categoryId === 'string'
                ? product.categoryId
                : product.categoryId?._id;

            return productCategoryId === this.categoryId;
          });
        }

        this.totalRecords = this.products.length;
        this.paginate();
        this.isLoading = false;

        // // Debug: Log the filtering results
        // console.log('Filtering by category:', this.categoryId);
        // console.log('Matching products:', this.products);
      },
      error: (err) => {
        console.error('Error loading products:', err); // Debug
        this.isLoading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.message || 'Failed to load products',
          life: 3000,
        });
      },
    });
  }
  showAllCategoryIds() {
    const categoryIds = [
      ...new Set(
        this.products.filter((p) => p.categoryId).map((p) => p.categoryId?._id)
      ),
    ];
    console.log('All category IDs in products:', categoryIds);
  }
  paginate(): void {
    this.paginatedProducts = this.products.slice(
      this.first,
      this.first + this.rows
    );
  }

  onPageChange(event: any): void {
    this.first = event.first;
    this.rows = event.rows;
    this.paginate();
  }

  viewProduct(product: Product): void {
    if (product._id) {
      this.router.navigate(['/products/details', product._id]);
    }
  }

  addToCart(product: Product, event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    // Implement cart logic here
    this.messageService.add({
      severity: 'success',
      summary: 'Added to Cart',
      detail: `${product.name} was added to your cart`,
    });
  }
  //   // Add this temporary method
  // showCategoryDebugInfo() {
  //   console.log('Current route categoryId:', this.categoryId);
  //   console.log('All unique category IDs:',
  //     [...new Set(this.products
  //       .filter(p => p.categoryId)
  //       .map(p => p.categoryId?._id)
  //     )]
  //   );
  // }
}
