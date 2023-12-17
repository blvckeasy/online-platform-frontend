import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-course-card',
    standalone: true,
    imports: [],
    templateUrl: './course-card.component.html',
    styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit {
    @Input() course: any;
    @Input() author: any;

    ngOnInit(): void {
        console.log(this.course)
        console.log(this.author)
    }
}
