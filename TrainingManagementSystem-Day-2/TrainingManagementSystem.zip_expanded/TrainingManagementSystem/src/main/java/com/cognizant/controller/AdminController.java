package com.cognizant.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.cognizant.model.Employee;
import com.cognizant.service.EmployeeService;

@Controller
public class AdminController {
	@Autowired
	private EmployeeService eservice;
	@Autowired
	private HttpSession session;
	
	@GetMapping("/admin")
	public String AdminHome() {
		return "AdminHome";
	}
	
	@GetMapping("/employees")
	public String Employees(Model model) {
		List<Employee> list=eservice.findAll();
		model.addAttribute("list", list);
		return "Employees";
	}
	
	@GetMapping("/activate/{userid}")
	public String Activate(@PathVariable("userid") String userid){
		Employee emp=eservice.findById(userid).get();
		emp.setIsactive("Y");
		eservice.save(emp);
		return "redirect:/employees";
	}
}
