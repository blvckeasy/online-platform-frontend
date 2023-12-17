import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { BACKEND_URL_GRAPHQL } from '../../../config/config'


@Component({
  	selector: 'app-course-list',
  	standalone: true,
  	imports: [
  	  	CourseCardComponent,
		ButtonComponent,
		CommonModule,
  	],
  	templateUrl: './course-list.component.html',
  	styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {
	courses!: Array<any>;
	private BACKEND_URL_GRAPHQL = BACKEND_URL_GRAPHQL;

	async ngOnInit(): Promise<void> {
		const query = `
			query {
				getCourses {
				  course {
					  id
					  name
					  price
				  }
				  author {
					  id
					  contact
					  fullname
					  role
					  signed_time
				  }
				}
			}
		`


		const response = await fetch(this.BACKEND_URL_GRAPHQL, {
			method: "POST",
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify({ query }),
		});
		  
		this.courses = (await response.json()).data.getCourses;

		console.log(response);
	}
}
