export interface PickupAddress {
  name: string;
  mobile: string;
  pinCode: string;
  address: string;
}

export interface BankDetails {
  accountNumber: string;
  accountHolderName: string;
  accountPassword: string;
}

export interface BusinessDetails {
  businessName: string;
}

export interface Seller {
  id?: number;
  mobile: string;
  otp: string;
  bin: string;
  pickupAddress: PickupAddress;
  bankDetails: BankDetails;
  sellerName: string;
  email: string;
  businessDetails: BusinessDetails;
  password: string;
  accountStatus?: string;
}

export interface SellerReport {
  id: number;
  seller: Seller;
  totalEarnings: number;
  totalSales: number;
  totalReFunds: number;
  totalTax: number;
  netEarnings: number;
  totalOrders: number;
  cancelOrders: number;
  totalTransactions: number;
}
