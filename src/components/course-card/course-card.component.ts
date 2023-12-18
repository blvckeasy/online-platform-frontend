import { Component, Input, OnInit } from '@angular/core';
import { BACKEND_URL_REST_THUMBNAIL } from '../../../config/config';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

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
    @Input() course: any;
    @Input() author: any;

    BACKEND_URL_REST_THUMBNAIL = BACKEND_URL_REST_THUMBNAIL

    ngOnInit(): void {
    }
}
