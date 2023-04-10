package com.jpajwt.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.jpajwt.models.AuthenticationRequest;
import com.jpajwt.models.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.data.repository.CrudRepository;
import com.jpajwt.repository.EmployeeRepository;


@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;


    @GetMapping("/employees")
    public List<Employee> getByNames(){
        List<Employee> list =employeeRepository.findAll();
        return list;
    }

    @GetMapping("/employees/{name}")
    public Employee getByName(@PathVariable String name){
        List<Employee> list =employeeRepository.findByEmailId(name);
        return list.get(0);
    }

}
