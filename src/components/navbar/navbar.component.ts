import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { PlatformTitleComponent } from '../platform-title/platform-title.component';
import { IUser } from '../../interfaces/user.interface';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  	selector: 'app-navbar',
  	standalone: true,
  	imports: [
		CommonModule,
		ButtonComponent,
		RouterOutlet,
		RouterLink,
		ScrollingModule,
		PlatformTitleComponent,
		MatIconModule,
	],
  	templateUrl: './navbar.component.html',
  	styleUrl: './navbar.component.css',
	providers: [
		Router
	]
})
export class NavbarComponent implements OnInit {
	@Input()
	public routerLink?: string

	public user? : IUser;

	constructor (
		private router: Router,
	) {}

	async ngOnInit(): Promise<void> {
		const user = JSON.parse(window.localStorage.getItem('user') || "{}") as IUser;
		if (user?.id) {
			this.user = user;
		}
	}

	async logout () {
		window.localStorage.removeItem('token');
		window.localStorage.removeItem('user');
		this.router.navigate(['/login']);
		console.log("logout")
	}
}
