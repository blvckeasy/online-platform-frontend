import { Injectable } from '@angular/core';
import { BACKEND_URL_GRAPHQL } from '../../../config/config';
import { IGraphQLResponse } from '../../interfaces/graphql.interface';



@Injectable({
  	providedIn: 'root'
})
export class CourseService {

 	constructor() {}

	async getCourses (): Promise<IGraphQLResponse> {
		const getCoursesQuery = `
			query {
				getCourses {
				  	author {
						id
						contact
						fullname
						signed_time
				  	}
				  	course {
						id
						google_drive_thumbnail_id
						title
				  	}
				}
			}
		`

		const response = await fetch(BACKEND_URL_GRAPHQL, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ query: getCoursesQuery }),
		})

		const result = (await response.json()) as IGraphQLResponse;
		return result
	}

	async getCourse (courseID: number): Promise<IGraphQLResponse> {
		const getCourseQuery = `
			mutation($getCourseInput: GetCourseInput!) {
			 	getCourse(getCourseInput: $getCourseInput) {
			    	course {
			    	  id
			    	  google_drive_thumbnail_id
			    	  price
			    	  title
			    	  description
			    	  user_id
			    	}
			    	themes {
			    	  id
			    	  course_id
			    	  title
			    	  videos {
			    	    id
			    	    google_drive_video_id
			    	    theme_id
			    	    title
			    	    uploaded_at
			    	  }
			    	}
			  	}
			}
		`

		const getCourseVariables = {
			"getCourseInput": {
			  "id": courseID
			}
		}

		const response = await fetch(BACKEND_URL_GRAPHQL, {
			method: "POST", 
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ query: getCourseQuery, variables: getCourseVariables }),
		});

		const result = (await response.json()) as IGraphQLResponse;
		return result;
	}
}
