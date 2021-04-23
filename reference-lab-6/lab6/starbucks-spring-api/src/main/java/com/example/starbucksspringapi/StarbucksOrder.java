package com.example.starbucksspringapi;
import java.util.Objects;
import javax.persistence.*;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@Table(indexes=@Index(name = "altIndexTwo", columnList = "regID", unique = true))
@Data
@RequiredArgsConstructor
class StarbucksOrder {
    private @Id @GeneratedValue Long id;
    @Column(nullable=false) private String regID;
    @Column(nullable=false) private String drink;
    @Column(nullable=false) private String milk;
    @Column(nullable=false) private String size;
    @Column(nullable=false) private double total;
    private String status;
}