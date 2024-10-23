package com.everyday.modal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Data
@EqualsAndHashCode
public class Coupon {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

}
