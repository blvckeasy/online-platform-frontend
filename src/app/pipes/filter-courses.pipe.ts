import { Pipe, PipeTransform } from '@angular/core';
import { ICourseWithUser } from '../../interfaces/course.interface';

@Pipe({
  	name: 'filterCourses',
  	standalone: true,
  	pure: false,
})
export class FilterCoursesPipe implements PipeTransform {

    transform(courses: ICourseWithUser[], searchValue: string): any {
		const filteredCourse = courses.filter((course: ICourseWithUser) => {
			return course.course.title
				.toLowerCase()
				.trim()
				.startsWith(
					searchValue
						.toLocaleLowerCase()
						.trim()
					);
		})

		return filteredCourse;
	}

}
