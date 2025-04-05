package com.project.professor.allocation.service;

import java.util.List;

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
	
	public List<Professor> findByDepartment(Long departmentId){
		Department dep = new Department();
		dep.setId(departmentId);
		return repository.findByDepartment(dep);
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
		
		return saveInternal(professor);
	}

	public Professor update(Professor professor) {
		if (repository.existsById(professor.getId())) {
			
			return saveInternal(professor);
			
		}else {
			return null;
		}
	}
	
	private Professor saveInternal(Professor professor) {
		professor = repository.save(professor);
		
		Department department = departmentService.findById(professor.getDepartment().getId());
		
		professor.setDepartment(department);
		
		return professor;
	}

	public List<Professor> findAll(String name) {
		if(name == null) {
			return repository.findAll();
		} else {
			return repository.findByNameContainingIgnoreCase(name);
		}
	}
	
}
