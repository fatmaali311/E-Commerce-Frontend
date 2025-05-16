import { Product } from "./product";

export interface WishlistItem {
  _id?: string;
  userId: string;
  productId: string;
  addedAt: Date;

  // Populated fields
  product?: Product;
}
export interface Wishlist {
  userId: string;
  items: WishlistItem[];
}
