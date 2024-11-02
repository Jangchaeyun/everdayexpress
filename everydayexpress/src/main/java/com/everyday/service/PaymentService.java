package com.everyday.service;

import com.everyday.modal.Order;
import com.everyday.modal.PaymentOrder;
import com.everyday.modal.User;
import com.stripe.model.PaymentLink;

import java.util.Set;

public interface PaymentService {
    PaymentOrder createOrder(User user, Set<Order> orders);
    PaymentOrder getPaymentOrderById(Long orderId) throws Exception;
    PaymentOrder getPaymentOrderByPaymentId(String orderId) throws Exception;
    Boolean ProccedPaymentOrder(PaymentOrder paymentOrder,
                                String paymentId, String paymentLinkId);
    PaymentLink createStripePaymentLink(User user, Long amount,
                                        Long orderId);
}
