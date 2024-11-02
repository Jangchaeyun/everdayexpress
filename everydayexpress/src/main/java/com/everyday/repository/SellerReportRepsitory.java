package com.everyday.repository;

import com.everyday.modal.SellerReport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SellerReportRepsitory extends JpaRepository<SellerReport, Long> {
    SellerReport findBySellerId(Long sellerId);
}
