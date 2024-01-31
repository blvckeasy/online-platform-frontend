import { Injectable } from '@angular/core';
import { IGraphQLResponse } from '../../interfaces/graphql.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseVideoService {
  	constructor() {}

  	async getCourseVideo (id: number): Promise<IGraphQLResponse> {
    	const getCourseVideoQuery = `
			mutation($getCourseVideoInput: GetCourseVideoInput!) {
				getCourseVideo(getCourseVideoInput: $getCourseVideoInput) {
					id
					google_drive_video_id
					theme_id
					title
				}
			}
    	`
    	const variables = {
			"getCourseVideoInput": {
			  "id": id
			}
		};

    	const response = await fetch(environment.BACKEND_URL_GRAPHQL, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ query: getCourseVideoQuery, variables }),
		})

		const result = (await response.json()) as IGraphQLResponse;
		return result; 
	}
}