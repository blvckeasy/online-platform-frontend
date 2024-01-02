import { Component, Input, OnInit } from '@angular/core';
import { BACKEND_URL_REST_COURSE_THUBNAIL } from '../../../config/config';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { ICourse } from '../../interfaces/course.interface';

@Component({
    selector: 'app-course-card',
    standalone: true,
    imports: [
        CommonModule,
        ButtonComponent,
    ],
    templateUrl: './course-card.component.html',
    styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit {
    @Input() course!: ICourse;
    @Input() author!: any;
    @Input() loadingMode: Boolean = false;

    BACKEND_URL_REST_COURSE_THUBNAIL = BACKEND_URL_REST_COURSE_THUBNAIL

    ngOnInit(): void {
    }
}
