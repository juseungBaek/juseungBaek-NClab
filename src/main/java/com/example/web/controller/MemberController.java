package com.example.web.controller;

import org.springframework.web.bind.annotation.GetMapping;

public class MemberController {
	
	@GetMapping("/member")
	public void member() {
		System.out.println("안녕");
		System.out.println("안녕2");
	}
}
