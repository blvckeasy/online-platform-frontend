import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'
import {MatIconModule} from '@angular/material/icon';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [
      	FontAwesomeModule,
		MatIconModule,
	],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})
export class FooterComponent {
    faCode = faCode;
}
