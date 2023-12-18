import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { IGraphQLResponse } from '../../interfaces/graphql.interface';
import { CourseService } from '../../app/services/course.service';


@Component({
  	selector: 'app-course-list',
  	standalone: true,
  	imports: [
		CommonModule,
  	  	CourseCardComponent,
		ButtonComponent,
	],
  	templateUrl: './course-list.component.html',
  	styleUrl: './course-list.component.css',
	providers: [
		CourseService,
	]
})
export class CourseListComponent implements OnInit {
	courses!: Array<any>;

	constructor (
		private courseService: CourseService,
	) {}

	async ngOnInit(): Promise<void> {
		const { data: { getCourses: courses }, errors }: IGraphQLResponse = await this.courseService.getCourses();

		if (errors) {
			return;
		}

		this.courses = courses;
		console.log('courses: ', this.courses);
	}
}
