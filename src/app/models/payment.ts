import { Order } from "./order";
import { User } from "./user";

export interface Payment {
  _id?: string;
  orderId: string;
  userId: string;
  method: string;
  amount: number;
  currency: string;
  status: 'Pending' | 'Completed' | 'Failed';
  transactionId: string;
  createdAt?: Date;
  updatedAt?: Date;

  // Populated fields
  order?: Order;
  user?: User;
}
