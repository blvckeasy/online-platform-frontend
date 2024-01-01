import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { CourseScheduleComponent } from './views/course-schedule/course-schedule.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { CourseVideoComponent } from './views/course-video/course-video.component';
import { FaqComponent } from './views/faq/faq.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'course/video/:id', component: CourseVideoComponent },
    { path: 'course/:id', component: CourseScheduleComponent },
    { path: 'faq', component: FaqComponent },
    { path: '**', component: PageNotFoundComponent },
];