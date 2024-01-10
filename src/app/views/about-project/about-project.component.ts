import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { IUser } from '../../../interfaces/user.interface';

@Component({
  	selector: 'app-about-project',
  	standalone: true,
  	imports: [
		NavbarComponent,
	],
  	templateUrl: './about-project.component.html',
  	styleUrl: './about-project.component.css'
})
export class AboutProjectComponent implements OnInit {
	public user?: IUser;
	public name?: string;

	async ngOnInit(): Promise<void> {
		this.user = JSON.parse(localStorage.getItem("user") || "{}");
		console.log(this.user);
		this.name =  this.user?.fullname?.split(" ")[0];
	}
}
