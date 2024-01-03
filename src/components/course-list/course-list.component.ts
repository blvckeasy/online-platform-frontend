import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { IGraphQLResponse } from '../../interfaces/graphql.interface';
import { CourseService } from '../../app/services/course.service';
import { SearchService } from '../../app/services/search-bar.service';
import { FilterCoursesPipe } from '../../app/pipes/filter-courses.pipe';
import { ICourseWithUser } from '../../interfaces/course.interface';
import { Observable, delay } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@Component({
  	selector: 'app-course-list',
  	standalone: true,
  	imports: [
		CommonModule,
  	  	CourseCardComponent,
		ButtonComponent,
		FilterCoursesPipe,
		FormsModule
	],
  	templateUrl: './course-list.component.html',
  	styleUrl: './course-list.component.css',
	providers: [
		CourseService,
	],
})
export class CourseListComponent implements OnInit {
	courses!: Array<ICourseWithUser>;
	getCoursesLoading: Boolean = false;
	searchTerm: string = '';

	constructor (
		private courseService: CourseService,
		private searchService: SearchService,
	) {}

	async ngOnInit(): Promise<void> {
		this.searchService.searchTerm$.subscribe((term) => {
			this.searchTerm = term;
		});

		this.getCoursesLoading = true;
		const { data , errors }: IGraphQLResponse = await this.courseService.getCourses();

		if (errors) {
			alert(errors[0].message);
			return;
		}
	
		const { getCourses: courses } = data;

		this.getCoursesLoading = false;
		this.courses = courses
	}

}