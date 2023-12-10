import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  	selector: 'app-button',
  	standalone: true,
  	imports: [],
  	templateUrl: './button.component.html',
  	styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit {
	@Input() buttonText!: string;
	private backendURL = "http://localhost:4000/graphql"

	constructor () {}

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
		  
		const courses = await response.json();
		courses.data.getCourses.forEach((course: any) => {
			console.log(course);
		});
	}

	onClick(): void {
		console.log("bosildi.");
	}
}