package com.example.professorallocation.controller;

import com.example.professorallocation.model.Professor;
import com.example.professorallocation.repository.ProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/professors")
public class ProfessorController {
    
    @Autowired
    private ProfessorRepository repository;
    
    @GetMapping
    public List<Professor> getAll() {
        return repository.findAll();
    }
    
    @PostMapping
    public Professor create(@RequestBody Professor professor) {
        return repository.save(professor);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        repository.deleteById(id);
        return ResponseEntity.ok().build();
    }
} 