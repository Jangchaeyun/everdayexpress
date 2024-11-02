package com.everyday.service;


import com.everyday.modal.Seller;
import com.everyday.modal.SellerReport;

public interface SellerReportService {
    SellerReport getSellerReport(Seller seller);
    SellerReport updateSellerReport(SellerReport sellerReport);
}
