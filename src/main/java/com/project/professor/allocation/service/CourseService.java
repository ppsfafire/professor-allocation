package com.project.professor.allocation.service;

import org.springframework.stereotype.Service;

import com.project.professor.allocation.repository.CourseRepository;


@Service
public class CourseService {
	
private final CourseRepository repository;
	
	public CourseService (CourseRepository repository) {
		this.repository = repository;
	}
}
