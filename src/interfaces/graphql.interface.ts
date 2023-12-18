export interface IGraphQLErrorLocation {
    column: number;
    line: number;
}

export interface IGraphQLError {
    message: string;
    extensions: {
        code: string;
        stacktrace: string[];
    };
    locations: IGraphQLErrorLocation[]
}

export interface IGraphQLResponse {
    errors?: IGraphQLError[];
    data?: any;
}
