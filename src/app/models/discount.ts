export interface Discount {
  _id?: string;
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
  minPurchase: number;
  usageLimit: number;
  usedCount: number;
  apllicableProducts?: string[];
  applicableCategories?: string[];
  creeatedBy: string;
  startDate: Date;
  endDate: Date;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
