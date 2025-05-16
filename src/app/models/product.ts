export interface ProductTag {
  _id: string;
  name: string;
}

export interface ProductSeller {
  _id: string;
}

export interface ProductSpecificationsOther {
  storage: string;
  display: string;
  chip: string;
  camera: string;
  battery: string;
  warranty: string;
}

export interface ProductSpecifications {
  weight: string;
  dimensions: string;
  color: string;
  material: string;
  other: ProductSpecificationsOther;
}

export interface ProductStock {
  quantity: number;
  lowStockThreshold: number;
  isInstock: boolean;
  reservedQuantity: number;
}
export interface ProductCategory {
  _id: string;
  name: string;
}
export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  salePrice: number;
  categoryId: ProductCategory | null;
  images: string[];
  tags: ProductTag[];
  sellerId: ProductSeller;
  isActive: boolean;
  isFeatured: boolean;
  approvalStatus: string;
  averageRating: number;
  specifications: ProductSpecifications;
  sku: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  stock: ProductStock;
}
