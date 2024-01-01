import { Injectable } from '@angular/core';
import { BACKEND_URL_GRAPHQL } from '../../../config/config';
import { IGraphQLResponse } from '../../interfaces/graphql.interface';

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

        const response = await fetch(BACKEND_URL_GRAPHQL, {
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