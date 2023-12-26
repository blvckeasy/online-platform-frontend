const BACKEND_URL: string = `http://localhost:9000`
const BACKEND_URL_GRAPHQL: string = `${BACKEND_URL}/graphql`
const BACKEND_URL_REST_THUMBNAIL: string = `${BACKEND_URL}/thumbnail_url/`
const BACKEND_URL_REST_COURSE_VIDEO: string = `${BACKEND_URL}/course_video/`

export const environment = {
    production: false,
    BACKEND_URL,
    BACKEND_URL_GRAPHQL,
    BACKEND_URL_REST_THUMBNAIL,
    BACKEND_URL_REST_COURSE_VIDEO,
};