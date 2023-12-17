import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { OtpInputComponent } from '../../../components/otp-input/otp-input.component';
import { PlatformTitleComponent } from '../../../components/platform-title/platform-title.component';

@Component({
  	selector: 'app-login',
  	standalone: true,
  	imports: [
		CommonModule,
		NavbarComponent,
		OtpInputComponent,
		PlatformTitleComponent,
  	],
  	templateUrl: './login.component.html',
  	styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  	ngOnInit(): void {
	}
}
