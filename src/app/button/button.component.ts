import { Component, OnInit, Input } from '@angular/core';

@Component({
  	selector: 'app-button',
  	standalone: true,
  	imports: [],
  	templateUrl: './button.component.html',
  	styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit {
	@Input() buttonText!: string;
	private backendURL = "http://localhost:4000/graphql"

	constructor () {}

	async ngOnInit(): Promise<void> {
	}

	onClick(): void {
		console.log("bosildi.");
	}
}