package com.example.professorallocation.repository;

import com.example.professorallocation.model.Curso;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CursoRepository extends JpaRepository<Curso, Long> {
} 