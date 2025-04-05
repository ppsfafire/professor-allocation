package com.project.professor.allocation.service;

import org.springframework.stereotype.Service;

import com.project.professor.allocation.entity.Professor;
import com.project.professor.allocation.repository.ProfessorRepository;


@Service
public class ProfessorService {

private final ProfessorRepository repository;
	
	public ProfessorService (ProfessorRepository repository) {
		this.repository = repository;
	}

	public Professor findById(Long id) {
		return repository.findById(id).orElse(null);
	}

	public void deleteById(Long id) {
		if (repository.existsById(id)) {
			repository.deleteById(id);
		}
		
		
	}

	public void deleteAll() {
		repository.deleteAllByIdInBatch(null);
		
	}

	public Professor save(Professor professor) {
		professor.setId(null);
		
		return repository.save(professor);
	}
}
