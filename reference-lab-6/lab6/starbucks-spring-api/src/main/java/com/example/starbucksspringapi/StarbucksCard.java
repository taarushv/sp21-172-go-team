package com.example.starbucksspringapi;

import java.util.Objects;
import javax.persistence.*;

import lombok.Data;
import lombok.RequiredArgsConstructor;
@Entity
@Table(indexes=@Index(name = "altIndex", columnList = "cardNumber", unique = true))
@Data
@RequiredArgsConstructor
class StarbucksCard {
    private @Id @GeneratedValue Long id;
    @Column(nullable=false) private String cardNumber;
    @Column(nullable=false) private String cardCode;
    @Column(nullable=false) private double balance;
    @Column(nullable=false) private boolean activated;
    private String status;
}