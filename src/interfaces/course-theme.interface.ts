import { ICourseVideo } from "./course-video.interface";

export interface ICourseTheme {
    id: number;
    course_id: number;
    title: string;
    description: string;
}

export interface ICourseThemeWithVideos {
    id: number;
    course_id: number;
    title: string;
    description: string;
    videos?: ICourseVideo[];
}
