import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { ICourse } from '../../../interfaces/course.interface';
import { ICourseThemeWithVideos } from '../../../interfaces/course-theme.interface';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { environment } from '../../../environments/environment';


@Component({
  	selector: 'app-course-schedule',
  	standalone: true,
  	imports: [
		CommonModule,
		NavbarComponent,
		MatIconModule,
		RouterLink,
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
	BACKEND_URL_REST_COURSE_THUBNAIL: string = environment.BACKEND_URL_REST_COURSE_THUBNAIL
	course!: ICourse
	themes!: ICourseThemeWithVideos[]
	getCourseInfoLoading: Boolean = false;

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

		this.getCourseInfoLoading = true;
		const { data, errors } = await this.courseService.getCourse(Number(this.courseID));
	
		if (errors) {
			alert(errors[0].message);
			return;
		}

		const { getCourse: { course, themes } } = await data;

		this.getCourseInfoLoading = false;
		this.course = course;
		this.themes = themes
	}

	async changeShowMode(theme: ICourseThemeWithVideos) {
		theme.show = !theme.show
	}
}
