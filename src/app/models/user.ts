export interface Address {
  _id?: string;
  type: 'billing' | 'shipping';
  street: string;
  city: string;
  governerate: string;
  isDefault: boolean;
}

export interface SellerInfo {
  storeName?: string;
  description?: string;
  bankDetails?: any;
  storeRating: number;
  approvalStatus: 'pending' | 'approved' | 'rejected';
}

export interface User {
  _id?: string;
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  addresses: Address[];
  role: 'admin' | 'client' | 'seller';
  isActive: boolean;
  isVerified: boolean;
  profileImage: string;
  sellerInfo?: SellerInfo;
  lastLogin?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  fullName?: string;
}
