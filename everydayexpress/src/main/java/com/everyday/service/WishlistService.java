package com.everyday.service;

import com.everyday.modal.Product;
import com.everyday.modal.User;
import com.everyday.modal.Wishlist;

public interface WishlistService {
    Wishlist createWishlist(User user);
    Wishlist getWishlistByUserId(User user);
    Wishlist addProductToWishlist(User user, Product product);
}
