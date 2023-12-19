import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { CourseScheduleComponent } from './views/course-schedule/course-schedule.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { CourseVideoComponent } from './views/course-video/course-video.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'course/:courseID/theme/:themeID/video/:videoID', component: CourseVideoComponent },
    { path: 'course/:id', component: CourseScheduleComponent },
    { path: '**', component: PageNotFoundComponent },
];