import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { BACKEND_URL_REST_COURSE_THUBNAIL } from '../../../../config/config';
import { ICourse } from '../../../interfaces/course.interface';
import { ICourseThemeWithVideos } from '../../../interfaces/course-theme.interface';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  	selector: 'app-course-schedule',
  	standalone: true,
  	imports: [
		CommonModule,
		NavbarComponent,
		MatIconModule,
	],
  	templateUrl: './course-schedule.component.html',
  	styleUrl: './course-schedule.component.css',
	providers: [
		Router,
		CourseService,
	]
})
export class CourseScheduleComponent implements OnInit {
	courseID!: string;
	BACKEND_URL_REST_COURSE_THUBNAIL = BACKEND_URL_REST_COURSE_THUBNAIL
	course!: ICourse
	themes!: ICourseThemeWithVideos[]

	constructor (
		private route: ActivatedRoute,
		private router: Router,
		private courseService: CourseService,
	) {}

	async ngOnInit(): Promise<void> {
		this.courseID = this.route.snapshot.paramMap.get('id') as string;
		if (!this.courseID) {
			this.router.navigate(['/page-not-found']);
		}

		const { data, errors } = await this.courseService.getCourse(Number(this.courseID));
		
		if (errors) {
			alert(errors[0].message);
			return;
		}

		const { getCourse: { course, themes } } = await data;

		console.log(course);
		console.log(themes);

		this.course = course;
		this.themes = themes
	}
}
