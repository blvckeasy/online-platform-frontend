import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { ButtonComponent } from './button/button.component';

@Component({
  	selector: 'app-root',
  	standalone: true,
  	imports: [
  	  	CommonModule, 
		RouterOutlet, 
		NavbarComponent, 
		SearchBarComponent, 
		CourseCardComponent,
		ButtonComponent,
	],
  	templateUrl: './app.component.html',
  	styleUrl: './app.component.css',
  	providers: [],
})
export class AppComponent {
  title = 'my-app';
}
