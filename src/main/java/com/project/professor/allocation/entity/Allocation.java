package com.project.professor.allocation.entity;

import java.sql.Time;
import java.time.DayOfWeek;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@Data
@AllArgsConstructor
public class Allocation {
	
	@Id
	private Long id;
	private DayOfWeek dayOfWeek;
	private Time startHour;
	private Time endHour;
	
	

}
