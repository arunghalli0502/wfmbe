package com.jsp.jspwfm.Dao;


import com.jsp.jspwfm.Models.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UsersRepository extends JpaRepository<User,Long> {

	 @Query(value = "SELECT * FROM Users u WHERE username = :username", nativeQuery = true)
	    public User getUserByUsername(String username);
	    
	    @Query(value = "SELECT * FROM Users u WHERE username = :username or email= :email", nativeQuery = true)
	    public User findByUsernameOrEmail(String username,String email);
	    @Query(value = "SELECT * FROM Users u WHERE    email= :data OR username = :data", nativeQuery = true)
	    public User getUserBydata(String data);
    
	    @Query(value = "SELECT * FROM Users u WHERE email = :email", nativeQuery = true) 
		public User getUserByemail(String email);
    
}
