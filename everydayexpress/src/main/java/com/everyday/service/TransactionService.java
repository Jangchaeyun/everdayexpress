package com.everyday.service;

import com.everyday.modal.Order;
import com.everyday.modal.Seller;
import com.everyday.modal.Transaction;

import java.util.List;

public interface TransactionService {
    Transaction createTransaction(Order order);
    List<Transaction> getTransactionsBySellerId(Seller seller);
    List<Transaction> getAllTransactions();
}
