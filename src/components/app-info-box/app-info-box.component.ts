import { Component, Input } from '@angular/core';

@Component({
  	selector: 'app-info-box',
  	standalone: true,
  	imports: [],
  	templateUrl: './app-info-box.component.html',
  	styleUrl: './app-info-box.component.css'
})
export class AppInfoBoxComponent {
	@Input('title') title!: string;
	@Input('info') info!: string;
}
