import { Category } from "./category";
import { User } from "./user";

export interface Specifications {
  weight?: string;
  dimensions?: string;
  color?: string;
  material?: string;
  other?: any;
}

export interface Stock {
  quantity: number;
  lowStockThreshold: number;
  isInstock: boolean;
  reservedQuantity: number;
}

export interface Product {
  _id?: string;
  name: string;
  description: string;
  price: number;
  salePrice: number;
  categoryId: string;
  images: string[];
  tags: string[];
  sellerId: string;
  isActive: boolean;
  isFeatured: boolean;
  approvalStatus: 'pending' | 'approved' | 'rejected';
  averageRating: number;
  stock: Stock;
  specifications: Specifications;
  sku: string;
  createdAt?: Date;
  updatedAt?: Date;

  // Populated fields
  seller?: User;
  category?: Category;
}
