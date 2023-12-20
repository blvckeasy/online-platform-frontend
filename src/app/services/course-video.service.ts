import { Injectable } from '@angular/core';
import { BACKEND_URL_GRAPHQL } from '../../../config/config';
import { IGraphQLResponse } from '../../interfaces/graphql.interface';

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
    	      		theme_id
    	      		thumbnail_url
    	      		title
    	      		uploaded_at
    	      		video_url
    	    	}
    	  	}
    	`
    	const variables = {
			"getCourseVideoInput": {
			  "id": 1
			}
		};

    	const response = await fetch(BACKEND_URL_GRAPHQL, {
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