import { Product } from "./product";

export interface CartItem {
  _id?: string;
  productId: string;
  cartId: string;
  quantity: number;
  price: number;
  addedAt: Date;
  name: string;
  subtotal?: number; 

  // Populated fields
  product?: Product;
}
