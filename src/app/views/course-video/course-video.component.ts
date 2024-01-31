import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseVideoService } from '../../services/course-video.service';
import { CommonModule } from '@angular/common';
import { ICourseVideo } from '../../../interfaces/course-video.interface';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { environment } from '../../../environments/environment';


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
	public BACKEND_URL_REST_COURSE_VIDEO: string = environment.BACKEND_URL_REST_COURSE_VIDEO

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

		if (errors) {
			alert(errors[0].message);
			return;
		}
		
		const { getCourseVideo: courseVideo } = data;
		
		this.courseVideo = courseVideo;
		console.log(this.courseVideo);
	}
}