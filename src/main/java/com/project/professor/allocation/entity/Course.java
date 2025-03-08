package com.project.professor.allocation.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@Data
@AllArgsConstructor
public class Course {
	
	@Id
	private Long id;
	private String name;
	private String description;
	
}
