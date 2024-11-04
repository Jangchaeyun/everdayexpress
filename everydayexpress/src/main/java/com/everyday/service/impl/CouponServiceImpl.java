package com.everyday.service.impl;

import com.everyday.modal.Cart;
import com.everyday.modal.Coupon;
import com.everyday.modal.User;
import com.everyday.repository.CartRepository;
import com.everyday.repository.CouponRepostiory;
import com.everyday.repository.UserRepository;
import com.everyday.service.CouponService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CouponServiceImpl implements CouponService {
    private final CouponRepostiory couponRepostiory;
    private final CartRepository cartRepository;
    private final UserRepository userRepository;

    @Override
    public Cart applyCoupon(String code, double orderValue, User user) throws Exception {
        Coupon coupon = couponRepostiory.findByCode(code);

        Cart cart = cartRepository.findByUserId(user.getId());

        if (coupon == null) {
            throw new Exception("coupon not valid");
        }

        if (user.getUsedCoupons().contains(coupon)) {
            throw new Exception("coupon already used");
        }
        if (orderValue <= coupon.getMinimumOrderValue()) {
            throw new Exception("valid for minimum order value" + coupon.getMinimumOrderValue());
        }
        if (coupon.isActive() &&
                LocalDate.now().isAfter(coupon.getValidityStartDate())
                && LocalDate.now().isBefore(coupon.getValidityEndDate())
        ) {
            user.getUsedCoupons().add(coupon);
            userRepository.save(user);

            double discountedPrice = (cart.getTotalSellingPrice() * coupon.getDiscountPercentage()) / 100;

            cart.setTotalSellingPrice(cart.getTotalSellingPrice() - discountedPrice);
            cart.setCouponCode(code);
            cartRepository.save(cart);
            return cart;
        }
        throw new Exception("coupon not valid");
    }

    @Override
    public Cart removeCoupon(String code, User user) throws Exception {
        Coupon coupon = couponRepostiory.findByCode(code);

        if (coupon == null) {
            throw new Exception("coupon not found");
        }

        Cart cart = cartRepository.findByUserId(user.getId());

        double discountedPrice = (cart.getTotalSellingPrice() * coupon.getDiscountPercentage()) / 100;

        cart.setTotalSellingPrice(cart.getTotalSellingPrice() + discountedPrice);
        cart.setCouponCode(null);

        return cartRepository.save(cart);
    }

    @Override
    public Coupon findCouponById(Long id) throws Exception {
        return couponRepostiory.findById(id).orElseThrow(() ->
                new Exception("coupon not found"));
    }

    @Override
    @PreAuthorize("hasRole ('ADMIN')")
    public Coupon createCoupon(Coupon coupon) {
        return couponRepostiory.save(coupon);
    }

    @Override
    public List<Coupon> findAllCoupons() {
        return couponRepostiory.findAll();
    }

    @Override
    @PreAuthorize("hasRole ('ADMIN')")
    public void deleteCoupon(Long id) throws Exception {
        findCouponById(id);
        couponRepostiory.deleteById(id);
    }
}