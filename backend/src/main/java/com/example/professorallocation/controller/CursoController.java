package com.example.professorallocation.controller;

import com.example.professorallocation.model.Curso;
import com.example.professorallocation.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/courses")
public class CursoController {
    
    @Autowired
    private CursoRepository repository;
    
    @GetMapping
    public List<Curso> getAll() {
        return repository.findAll();
    }
    
    @PostMapping
    public Curso create(@RequestBody Curso curso) {
        return repository.save(curso);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        repository.deleteById(id);
        return ResponseEntity.ok().build();
    }
} 