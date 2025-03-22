package com.project.professor.allocation.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.professor.allocation.entity.Course;

@RestController
@RequestMapping (path = "/course")
public class CourseController {
	
//	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
//	public ResponseEntity<List<Course>> findAll(@RequestParam(name = "name", required = false) String name) {
//	    List<Course> departments = courseService.findAll(name);
//	    return new ResponseEntity<>(course, HttpStatus.OK);
	
	
	@GetMapping (path = "{course_id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Course> FindById(@PathVariable(name = "course_id") Long id) {
		if (id % 2 == 0) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			
			Course course = new Course(1L, "Mamute");
//			course.setId(1L);
//			course.setName("Mamute");
			
			return new ResponseEntity<>(course, HttpStatus.OK);
		}
	}

}
