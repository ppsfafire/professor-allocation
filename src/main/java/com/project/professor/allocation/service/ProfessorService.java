package com.project.professor.allocation.service;

import org.springframework.stereotype.Service;

import com.project.professor.allocation.entity.Department;
import com.project.professor.allocation.entity.Professor;
import com.project.professor.allocation.repository.ProfessorRepository;


@Service
public class ProfessorService {

private final ProfessorRepository repository;
private final DepartmentService departmentService;
	
	public ProfessorService (ProfessorRepository repository, DepartmentService departmentService){
		this.repository = repository;
		this.departmentService = departmentService;
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
		
		professor = repository.save(professor);
		
		Department department = departmentService.findById(professor.getDepartment().getId());
		
		professor.setDepartment(department);
		
		return professor;
	}
}
