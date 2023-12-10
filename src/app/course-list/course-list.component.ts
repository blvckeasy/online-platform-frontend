import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

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
		const response = await fetch("http://localhost:4000/graphql", {
			method: "POST",
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify({ query }),
		});
		  
		this.courses = (await response.json()).data.getCourses;
		console.log(this.courses);
	}
}
