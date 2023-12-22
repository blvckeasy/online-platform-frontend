import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { SearchService } from '../../app/services/search-bar.service';
import { FormsModule } from '@angular/forms';


@Component({
  	selector: 'app-search-bar',
  	standalone: true,
  	imports: [
		CommonModule,
		MatFormFieldModule, 
		MatInputModule, 
		MatDatepickerModule, 
		MatNativeDateModule,
		MatIconModule,
		FormsModule,
	],
  	templateUrl: './search-bar.component.html',
  	styleUrl: './search-bar.component.scss',
	providers: [
		SearchService,
	]
})
export class SearchBarComponent {
	public searchTerm!: string;

	constructor(
		private searchService: SearchService,
	) {}
  
	onInputChange(event: any) {
		this.searchService.setSearchValue(event.target.value);
	}
}