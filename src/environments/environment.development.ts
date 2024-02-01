export const BACKEND_URL: string = `http://localhost:9000`
export const BACKEND_WEBSOCKET_URL: string = `ws://localhost:9000`
export const BACKEND_URL_GRAPHQL: string = `${BACKEND_URL}/graphql`;
export const BACKEND_URL_REST_THUMBNAIL: string = `${BACKEND_URL}/thumbnail_url/`;
export const BACKEND_URL_REST_COURSE_VIDEO: string = `${BACKEND_URL}/api/v1/course-video/`;
export const BACKEND_URL_REST_COURSE_THUBNAIL = `${BACKEND_URL}/api/v1/course-video/`;

export const environment = {
    production: false,
    BACKEND_URL,
    BACKEND_WEBSOCKET_URL,
    BACKEND_URL_GRAPHQL,
    BACKEND_URL_REST_THUMBNAIL,
    BACKEND_URL_REST_COURSE_VIDEO,
    BACKEND_URL_REST_COURSE_THUBNAIL,
};