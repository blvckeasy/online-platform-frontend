import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../services/course.service';

@Component({
  	selector: 'app-course-schedule',
  	standalone: true,
  	imports: [
		NavbarComponent,
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

		const { getCourse: { course, themes } } = data;

		console.log(course, themes)
	}
}
