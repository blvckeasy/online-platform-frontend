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
}
