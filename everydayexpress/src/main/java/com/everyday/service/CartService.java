package com.everyday.service;

import com.everyday.modal.Cart;
import com.everyday.modal.CartItem;
import com.everyday.modal.Product;
import com.everyday.modal.User;

public interface CartService {
    public CartItem addCartItem(
            User user,
            Product product,
            String size,
            int quantity
    );

    public Cart findUserCart(User user);
}
