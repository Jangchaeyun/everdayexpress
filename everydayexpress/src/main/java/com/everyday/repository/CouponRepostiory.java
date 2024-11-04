package com.everyday.repository;

import com.everyday.modal.Coupon;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CouponRepostiory extends JpaRepository<Coupon, Long> {
    Coupon findByCode(String code);
}
