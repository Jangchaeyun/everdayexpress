package com.everyday.service.impl;

import com.everyday.modal.Seller;
import com.everyday.modal.SellerReport;
import com.everyday.repository.SellerReportRepsitory;
import com.everyday.service.SellerReportService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SellerReportServiceImpl implements SellerReportService {

    private final SellerReportRepsitory sellerReportRepsitory;

    @Override
    public SellerReport getSellerReport(Seller seller) {
        SellerReport  sr = sellerReportRepsitory.findBySellerId(seller.getId());
        if (sr == null) {
            SellerReport newReport = new SellerReport();
            newReport.setSeller(seller);
            return sellerReportRepsitory.save(newReport);
        }
        return sr;
    }

    @Override
    public SellerReport updateSellerReport(SellerReport sellerReport) {
        return sellerReportRepsitory.save(sellerReport);
    }
}
