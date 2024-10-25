package com.everyday.modal;

import com.everyday.domain.PaymentStatus;
import lombok.Data;

@Data
public class PaymentDetails {
    private String paymentId;
    private String stripePaymentLinkId;
    private String getStripePaymentLinkReferenceId;
    private String stripePaymentLinkStatus;
    private String stripePaymentIdZWSP;
    private PaymentStatus status;
}
