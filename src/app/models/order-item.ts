import { Product } from "./product";

export interface OrderItem {
  _id?: string;
  productId: string;
  orderId: string;
  quantity: number;
  price: number;
  name: string;
  subtotal: number;

  // Populated fields
  product?: Product;
}
