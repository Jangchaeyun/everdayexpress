package com.everyday.repository;

import com.everyday.modal.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long>, JpaSpecificationExecutor<Product> {
    List<Product> findBySellerId(Long sellerId);

    @Query("SELECT p FROM Product p WHERE (:query is NULL or lower(p.title)" +
            "LIKE lower(concat('%', m :query, '%'))" +
            "OR (:query is null or lower(p.category.name))" +
            "LIKE LOWER(concat('%', :query, '%')) )")
    List<Product> searchProduct(@Param("query") String query);
}
