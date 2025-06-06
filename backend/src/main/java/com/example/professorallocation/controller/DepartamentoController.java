package com.example.professorallocation.controller;

import com.example.professorallocation.model.Departamento;
import com.example.professorallocation.repository.DepartamentoRepository;
import com.example.professorallocation.repository.ProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/departments")
public class DepartamentoController {
    
    @Autowired
    private DepartamentoRepository repository;
    
    @Autowired
    private ProfessorRepository professorRepository;
    
    @GetMapping
    public List<Departamento> getAll() {
        return repository.findAll();
    }
    
    @PostMapping
    public Departamento create(@RequestBody Departamento departamento) {
        return repository.save(departamento);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        // Verifica se existe professor vinculado
        long count = professorRepository.countByDepartmentId(id);
        if (count > 0) {
            return ResponseEntity.badRequest().body("Não é possível remover o departamento pois existem professores vinculados a ele.");
        }
        repository.deleteById(id);
        return ResponseEntity.ok().build();
    }
} 