package com.jpajwt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
//import com.jpajwt.models.Employee;
//import com.jpajwt.controller.EmployeeController;
import com.jpajwt.repository.EmployeeRepository;
import com.jpajwt.repository.UserDaO;

@SpringBootApplication
//@ComponentScan(basePackages = {"com.jpajwt.repository"})
//@ComponentScan(basePackages = {"UserDaO.class"})
//@ComponentScan({"com.jpajwt.models.Employee"})
//@ComponentScan(basePackages = {"com.jpajwt.service.MyUserDetailsService"})
//@EntityScan("com.jpajwt.models.Employee")
//@EnableJpaRepositories(basePackageClasses = UserDaO.class)
public class JpajwtApplication {

	public static void main(String[] args) {
		SpringApplication.run(JpajwtApplication.class, args);
	}

}
