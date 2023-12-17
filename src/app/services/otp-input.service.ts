import { Injectable } from '@angular/core';
import { BACKEND_URL_GRAPHQL } from '../../../config/config'

@Injectable({
  	providedIn: 'root'
})
export class OtpInputService {
  	constructor() {
  	}

	async login (code: number) {
		const query = `
			mutation($registerUserInput: RegisterUserInput!) {
				register(registerUserInput: $registerUserInput) {
				  	token {
						refresh_token
						access_token
				  	}
				  	user {
						id
						contact
						fullname
						telegram_user_id
						role
				  	}
				}
			}
		`
		const variables = {
			registerUserInput: {
			  code
			}
		}

		const response = await fetch(BACKEND_URL_GRAPHQL, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ query, variables }),
		})

		const result = await response.json();
		return result;
	}
}