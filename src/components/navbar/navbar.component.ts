import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { PlatformTitleComponent } from '../platform-title/platform-title.component';
import { IUser } from '../../interfaces/user.interface';
import { CommonModule } from '@angular/common';

@Component({
  	selector: 'app-navbar',
  	standalone: true,
  	imports: [
		CommonModule,
		ButtonComponent,
		PlatformTitleComponent,
	],
  	templateUrl: './navbar.component.html',
  	styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
	public user? : IUser;

	async ngOnInit(): Promise<void> {
		const user = JSON.parse(window.localStorage.getItem('user') || "{}") as IUser;
		if (user.id) {
			this.user = user;
		}
	}
}
