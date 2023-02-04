package com.sonpagu.board.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

	@GetMapping("hello")
	public List<String> hello() {
		return Arrays.asList("안녕하세요 테스트입니다.", "Hello");
	}
}
