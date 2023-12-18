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
						fullname
						role
					}
					course {
						id
						title
						thumbnail_url
						price
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
			mutation ($getCourseInput: GetCourseInput!) {
				getCourse(getCourseInput: $getCourseInput) {
					course {
						id
						price
						thumbnail_url
						title
						user_id
					}
					themes {
						id
						course_id
						title
						description
						videos {
							id
							thumbnail_url
							title
							uploaded_at
							video_url
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
