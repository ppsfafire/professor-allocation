package com.project.professor.allocation.entity;

import java.sql.Time;
import java.time.DayOfWeek;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Allocation {
	
	private Long id;
	private DayOfWeek dayOfWeek;
	private Time startHour;
	private Time endHour;
	
	

}
