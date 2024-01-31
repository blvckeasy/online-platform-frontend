import { Injectable } from '@angular/core';
import { IGraphQLResponse } from '../../interfaces/graphql.interface';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor() {}

    async getMe(token: string): Promise<IGraphQLResponse> {
        const getUserQuery = `
            query {
                getMe {
                    id
                    fullname
                    contact
                    role
                    signed_time
                    telegram_user_id
                }
            }
        `

        const response = await fetch(environment.BACKEND_URL_GRAPHQL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                token,
            },
            body: JSON.stringify({ query: getUserQuery })
        })

        const result = (await response.json()) as IGraphQLResponse;
        return result
    }
}
