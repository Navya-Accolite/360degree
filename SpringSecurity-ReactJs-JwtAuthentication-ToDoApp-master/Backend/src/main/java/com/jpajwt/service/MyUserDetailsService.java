package com.jpajwt.service;
import java.util.ArrayList;

import com.jpajwt.models.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;



import com.jpajwt.models.UserDTO;
import com.jpajwt.repository.UserDaO;


@Service
public class MyUserDetailsService implements UserDetailsService {


	@Autowired
private UserDaO userDao;

	@Autowired
	private PasswordEncoder noopEncoder;
	
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Employee.DAOuser user = userDao.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		System.out.println(user.getPassword());
		return new User(user.getUsername(),user.getPassword(),new ArrayList<>());
	}
	
	public Employee.DAOuser save(UserDTO user) {
		Employee.DAOuser newUser = new Employee.DAOuser();
		newUser.setUsername(user.getUsername());
		newUser.setPassword(noopEncoder.encode(user.getPassword()));
		return userDao.save(newUser);
	}
	
	

}




