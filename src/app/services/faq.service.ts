import { Injectable } from '@angular/core';
import { IGraphQLResponse } from '../../interfaces/graphql.interface';
import { environment } from '../../environments/environment';


@Injectable({
  	providedIn: 'root',
})
export class FaqService{
	constructor () {}

    async getFaqs () {
        const getFaqsQuery = `
            query {
                getFaqs {
                    id
                    question
                    answer
                }
            }
        `

        const response = await fetch(environment.BACKEND_URL_GRAPHQL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: getFaqsQuery })
        })

        const result = (await response.json()) as IGraphQLResponse;
        return result
    }
}