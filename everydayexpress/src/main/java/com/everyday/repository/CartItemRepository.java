package com.everyday.repository;

import com.everyday.modal.Cart;
import com.everyday.modal.CartItem;
import com.everyday.modal.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    CartItem findByCartAndProductAndSize(Cart cart, Product product, String size);
}
