import { Product } from "./product";
import { User } from "./user";

export interface Review {
  _id?: string;
  productId: string;
  userId: string;
  orderId: string;
  title: string;
  rating: number;
  comment: string;
  images?: string[];
  helpfulCount: number;
  reportCount: number;
  isEdited: boolean;
  status: 'active' | 'removed';
  createdAt?: Date;
  updatedAt?: Date;

  // Populated fields
  product?: Product;
  user?: User;
}
