import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
		const token = JSON.parse(localStorage.getItem("token") || "{}")?.access_token;
		if (!token) {
			this.router.navigate(['/login'])
			alert("Siz videolarni ko'rishingiz uchun login qilishingiz kerak");
			return;
		}

		this.videoID = this.route.snapshot.paramMap.get('id');

		if (!this.videoID) {
			console.log('kurs topilmadi')
			this.router.navigate(['/page-not-found']);
			return;
		}

		const { data, errors } = await this.courseVideoService.getCourseVideo(parseInt(this.videoID, 10));

		console.log('asdfasdfasdfasdf');

		if (errors) {
			alert(errors[0].message);
			return;
		}

		const { getCourseVideo: courseVideo } = data; 
		this.courseVideo = courseVideo;
	}
}