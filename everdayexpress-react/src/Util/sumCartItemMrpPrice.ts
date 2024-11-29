import { CartItem } from "../types/cartTypes";

export const sumCartItemMrpPrice = (cartItems: CartItem[]) => {
  return cartItems.reduce(
    (acc, item) => acc + item.mrpPrice * item.quantity,
    0
  );
};
