import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { CourseScheduleComponent } from './views/course-schedule/course-schedule.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'course/:id', component: CourseScheduleComponent },
    { path: '**', component: PageNotFoundComponent },
];