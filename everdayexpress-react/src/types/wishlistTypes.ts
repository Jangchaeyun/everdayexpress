import { Product } from "./ProductTypes";
import { User } from "./userTypes";

export interface Wishlist {
  id: number;
  user: User;
  products: Product[];
}

export interface WishlistState {
  wishlist: Wishlist | null;
  loading: boolean;
  error: string | null;
}

export interface addProductToWishlistPayload {
  wishlistId: number;
  productId: number;
}
