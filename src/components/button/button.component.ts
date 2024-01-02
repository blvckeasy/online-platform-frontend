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
	@Input() courseID!: number;

	constructor () {}

	async ngOnInit(): Promise<void> {
	}

	onClick(): void {
	}
}