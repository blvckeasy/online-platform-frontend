import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';

@Component({
  	selector: 'app-root',
  	standalone: true,
  	imports: [
  	  	CommonModule, 
		RouterOutlet, 
		LoginComponent,
		HomeComponent,
	],
  	templateUrl: './app.component.html',
  	styleUrl: './app.component.css',
  	providers: [],
})
export class AppComponent {
  title = 'my-app';
}
