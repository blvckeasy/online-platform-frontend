import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { OtpInputComponent } from '../../../components/otp-input/otp-input.component';
import { PlatformTitleComponent } from '../../../components/platform-title/platform-title.component';
import { RouterLink } from '@angular/router';


@Component({
  	selector: 'app-login',
  	standalone: true,
  	imports: [
		CommonModule,
		NavbarComponent,
		OtpInputComponent,
		PlatformTitleComponent,
		RouterLink,
  	],
  	templateUrl: './login.component.html',
  	styleUrl: './login.component.css',
	providers: []
})
export class LoginComponent implements OnInit {
	constructor (
	) {}

  	async ngOnInit(): Promise<void> {

	}
}
