import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { IGraphQLResponse } from '../../interfaces/graphql.interface';
import { CourseService } from '../../app/services/course.service';
import { SearchService } from '../../app/services/search-bar.service';
import { FilterCoursesPipe } from '../../app/pipes/filter-courses.pipe';
import { ICourseWithUser } from '../../interfaces/course.interface';
import { Observable } from 'rxjs';


@Component({
  	selector: 'app-course-list',
  	standalone: true,
  	imports: [
		CommonModule,
  	  	CourseCardComponent,
		ButtonComponent,
		FilterCoursesPipe,
	],
  	templateUrl: './course-list.component.html',
  	styleUrl: './course-list.component.css',
	providers: [
		CourseService,
		SearchService,
	],
})
export class CourseListComponent implements OnInit {
	courses!: Array<ICourseWithUser>;
	searchTerm?: Observable<string>;
	getCoursesLoading: Boolean = false;

	constructor (
		private courseService: CourseService,
		private searchService: SearchService,
	) {}

	async ngOnInit(): Promise<void> {
		this.getCoursesLoading = true;

		console.log(this.getCoursesLoading);

		setTimeout(async () => {
			const { data , errors }: IGraphQLResponse = await this.courseService.getCourses();
	
			if (errors) {
				alert(errors[0].message);
				return;
			}
		
			const { getCourses: courses } = data;
	
			this.searchTerm = this.searchService.getSearchValue();
			this.getCoursesLoading = false;
			this.courses = courses
		}, 2000);

	}

}