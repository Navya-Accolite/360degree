package com.jpajwt.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Formula;
import org.hibernate.annotations.LazyGroup;

import javax.persistence.*;
import java.util.List;

@Entity
@AllArgsConstructor
@Builder
@Data

public class FeedBackResult {
    @Id
    private Long Sno;
    @OneToOne
    @JoinColumn(name = "FeedbackId", referencedColumnName = "FeedbackId")
    private RequestedFeedback requestedFeedback;

    private Integer Q1;
    private Integer Q2;
    private Integer Q3;
    private Integer Q4;
    private Integer Q5;

    private double avgScore;
    private String comment;

}