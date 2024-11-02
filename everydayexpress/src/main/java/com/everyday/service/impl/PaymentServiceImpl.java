package com.everyday.service.impl;

import com.everyday.domain.PaymentOrderStatus;
import com.everyday.modal.Order;
import com.everyday.modal.PaymentOrder;
import com.everyday.modal.User;
import com.everyday.repository.OrderRepository;
import com.everyday.repository.PaymentOrderRepository;
import com.everyday.service.PaymentService;
import com.stripe.model.PaymentLink;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {
    private PaymentOrderRepository paymentOrderRepository;
    private OrderRepository orderRepository;
    @Override
    public PaymentOrder createOrder(User user, Set<Order> orders) {
        Long amount = orders.stream().mapToLong(Order::getTotalSellingPrice).sum();
        PaymentOrder paymentOrder = new PaymentOrder();

        paymentOrder.setAmount(amount);
        paymentOrder.setUser(user);
        paymentOrder.setOrders(orders);
        return paymentOrderRepository.save(paymentOrder);
    }

    @Override
    public PaymentOrder getPaymentOrderById(Long orderId) throws Exception {
        return paymentOrderRepository.findById(orderId).orElseThrow(() ->
                new Exception("payment order not found"));
    }

    @Override
    public PaymentOrder getPaymentOrderByPaymentId(String orderId) throws Exception {
        PaymentOrder paymentOrder = paymentOrderRepository.findByPaymentLinkId(orderId);
        if (paymentOrder == null) {
            throw new Exception("payment order not found with provided payment link id");
        }
        return paymentOrder;
    }

    @Override
    public Boolean ProccedPaymentOrder(PaymentOrder paymentOrder, String paymentId, String paymentLinkId) {
        if (paymentOrder.getStatus().equals(PaymentOrderStatus.PENDING)) {
            
        }
        return null;
    }

    @Override
    public PaymentLink createStripePaymentLink(User user, Long amount, Long orderId) {
        return null;
    }
}
