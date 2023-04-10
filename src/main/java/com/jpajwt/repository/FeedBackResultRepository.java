package com.jpajwt.repository;


import com.jpajwt.models.FeedBackResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface FeedBackResultRepository extends JpaRepository<FeedBackResult,Long > {
    @Transactional
    @Modifying
    @Query(value = "UPDATE feed_back_result SET avg_score = ((q1+q2+q3+q4+q5) / 5.0) WHERE feedback_id = :id", nativeQuery = true)
    void updateAvgScore(@Param("id") Long id);
}
