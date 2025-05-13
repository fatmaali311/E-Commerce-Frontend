import { CartItem } from "./cart-item";

export interface Cart {
  _id?: string;
  userId: string;
  totalAmount: number;
  expiresAt: Date;
  createdAt?: Date;
  updatedAt?: Date;
  cartItems?: CartItem[];
}
