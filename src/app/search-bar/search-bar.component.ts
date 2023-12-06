import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  	selector: 'app-search-bar',
  	standalone: true,
  	imports: [
		MatFormFieldModule, 
		MatInputModule, 
		MatDatepickerModule, 
		MatNativeDateModule,
		MatIconModule
	],
  	templateUrl: './search-bar.component.html',
  	styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {}