package com.jpajwt.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class RequestedFeedback {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long FeedbackId;

    private Long status;

    @ManyToOne
    @JoinColumn(name="giver_empId",referencedColumnName="empId")
    private Employee employee;

    @ManyToOne
    @JoinColumn(name="receiver_empId",referencedColumnName="empId")
    private Employee temp;

}