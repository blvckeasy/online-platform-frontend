import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  	selector: 'app-root',
  	standalone: true,
  	imports: [
		CommonModule,
		RouterOutlet,
		RouterLink,
		RouterLinkActive,
	],
  	templateUrl: './app.component.html',
  	styleUrl: './app.component.css',
  	providers: [],
})
export class AppComponent {
  title = 'my-app';
}
