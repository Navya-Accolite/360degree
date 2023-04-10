package com.jpajwt.models;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Formula;
import org.hibernate.annotations.LazyGroup;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder

public class FinalResult {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long UniId;
    private float Q1Avg;
    private float Q2Avg;
    private float Q3Avg;
    private float Q4Avg;
    private float Q5Avg;

    private float FinalAvg;
}