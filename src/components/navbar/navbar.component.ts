import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { PlatformTitleComponent } from '../platform-title/platform-title.component';

@Component({
  	selector: 'app-navbar',
  	standalone: true,
  	imports: [
		ButtonComponent,
		PlatformTitleComponent
	],
  	templateUrl: './navbar.component.html',
  	styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
