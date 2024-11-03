package com.everyday.service;

import com.everyday.modal.Product;
import com.everyday.modal.Review;
import com.everyday.modal.User;
import com.everyday.request.CreateReviewRequest;

import java.util.List;

public interface ReviewService {
    Review createReview(CreateReviewRequest req, User user, Product product);
    List<Review> getReviewByProductId(Long productId);
    Review updateReview(Long reviewId, String reviewText, double rating, Long userId) throws Exception;
    void deleteReivew(Long reviewId, Long userId) throws Exception;
    Review getReviewId(Long reviewId) throws Exception;
}
