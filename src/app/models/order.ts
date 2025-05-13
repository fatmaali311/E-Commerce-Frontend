import { OrderItem } from "./order-item";
import { User } from "./user";

export interface ShippingAddress {
  street: string;
  city: string;
  governerate: string;
  zipCode: string;
}

export interface Order {
  _id?: string;
  orderNumber: string;
  customerId: string;
  subtotal: number;
  Tax: number;
  shippingFee: number;
  total: number;
  orderStatus: 'pending' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: ShippingAddress;
  paymentMethod: 'credit_card' | 'COD';
  paymentStatus: 'pending' | 'completed' | 'failed';
  trackingNumber?: string;
  deliveredAt?: Date;
  notes?: string;
  sellerIds: string[];
  discountApplied: number;
  couponId?: string;
  createdAt?: Date;
  updatedAt?: Date;

  // Populated fields
  customer?: User;
  orderItems?: OrderItem[];
  sellers?: User[];
}
