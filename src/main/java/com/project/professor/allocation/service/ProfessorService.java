package com.project.professor.allocation.service;

import org.springframework.stereotype.Service;

import com.project.professor.allocation.repository.ProfessorRepository;


@Service
public class ProfessorService {

private final ProfessorRepository repository;
	
	public ProfessorService (ProfessorRepository repository) {
		this.repository = repository;
	}
}
