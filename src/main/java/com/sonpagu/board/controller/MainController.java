package com.sonpagu.board.controller;

import lombok.extern.slf4j.Slf4j;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class MainController {

	@GetMapping("hello")
	public List<String> hello() {
		
		log.info("==== 첫 페이지 로딩 성공 ====");
		return Arrays.asList("안녕하세요 테스트입니다.", "Hello");
	}
}
