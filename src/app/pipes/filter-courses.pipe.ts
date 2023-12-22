import { Pipe, PipeTransform } from '@angular/core';
import { ICourseWithUser } from '../../interfaces/course.interface';

@Pipe({
  	name: 'filterCourses',
  	standalone: true,
  	pure: false,
})
export class FilterCoursesPipe implements PipeTransform {

    transform(courses: ICourseWithUser[], searchValue: string): any {
		// const filteredCourse = courses.filter((course: ICourseWithUser) => {
		// 	// console.log(course.course.title, "|" + searchValue + "|");
		// 	return course.course.title.startsWith(searchValue);
		// })

		// // console.log(filteredCourse)
		
      	// return filteredCourse;
		return courses;
	}

}
