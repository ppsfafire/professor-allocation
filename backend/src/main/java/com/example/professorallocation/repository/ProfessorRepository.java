package com.example.professorallocation.repository;

import com.example.professorallocation.model.Professor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfessorRepository extends JpaRepository<Professor, Long> {
    long countByDepartmentId(Long departmentId);
} 