const BACKEND_URL: string = `https://online-platform-d9fc1103e0d0.herokuapp.com`
const BACKEND_URL_GRAPHQL: string = `${BACKEND_URL}/graphql`
const BACKEND_URL_REST_THUMBNAIL: string = `${BACKEND_URL}/thumbnail_url/`
const BACKEND_URL_REST_COURSE_VIDEO: string = `${BACKEND_URL}/course_video/`

export const environment = {
    production: true,
    BACKEND_URL,
    BACKEND_URL_GRAPHQL,
    BACKEND_URL_REST_THUMBNAIL,
    BACKEND_URL_REST_COURSE_VIDEO,
};