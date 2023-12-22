import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourse } from '../../../interfaces/course.interface';
import { CourseVideoService } from '../../services/course-video.service';
import { BACKEND_URL_REST_COURSE_VIDEO } from '../../../../config/config';
import { CommonModule } from '@angular/common';
import { ICourseVideo } from '../../../interfaces/course-video.interface';
import { NavbarComponent } from '../../../components/navbar/navbar.component';

@Component({
  	selector: 'app-course-video',
  	standalone: true,
  	imports: [
		CommonModule,
		NavbarComponent,
	],
  	templateUrl: './course-video.component.html',
  	styleUrl: './course-video.component.css',
	providers: [
		Router,
		CourseVideoService,
	]
})
export class CourseVideoComponent implements OnInit {
	public videoID?: string | null;
	public courseVideo!: ICourseVideo;
	public BACKEND_URL_REST_COURSE_VIDEO: string = BACKEND_URL_REST_COURSE_VIDEO

  	constructor (
		private route: ActivatedRoute,
		private router: Router,
		private courseVideoService: CourseVideoService,	
	) {}

	async ngOnInit(): Promise<void> {
		this.videoID = this.route.snapshot.paramMap.get('id');

		if (!this.videoID) {
			console.log('kurs topilmadi')
			this.router.navigate(['/page-not-found']);
			return;
		}

		const { data, errors } = await this.courseVideoService.getCourseVideo(parseInt(this.videoID, 10));

		if (errors) {
			alert(errors[0].message);
			return;
		}

		const { getCourseVideo: courseVideo } = data; 
		this.courseVideo = courseVideo;
	}
}