package com.jpajwt.repository;
import com.jpajwt.models.Employee;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDaO extends CrudRepository<Employee.DAOuser, Integer> {
	Employee.DAOuser findByUsername(String username);
}