package com.project.professor.allocation.service;

import org.springframework.stereotype.Service;

import com.project.professor.allocation.entity.Course;
import com.project.professor.allocation.repository.CourseRepository;


@Service
public class CourseService {
	
private final CourseRepository repository;
	
	public CourseService (CourseRepository repository) {
		this.repository = repository;
	}

	public Course findById(Long id) {
		return repository.findById(id).orElse(null);
	}

	public Course save(Course course) {
		course.setId(null);
		return repository.save(course);
	}

	public Course update(Course course) {
		if (repository.existsById(course.getId())) {
			
			return repository.save(course);
		
		}else {
			return null;
	
		}
	}

	public void deleteById(Long id) {
		if (repository.existsById(id)) {
			repository.deleteById(id);
		}
		
	}

	public void deleteAll() {
		repository.deleteAllByIdInBatch(null);
		
	}	
}

    























