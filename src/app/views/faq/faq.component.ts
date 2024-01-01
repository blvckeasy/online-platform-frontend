import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FaqService } from '../../services/faq.service';
import { IFaq } from '../../../interfaces/faq.interface';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  	selector: 'app-faq',
  	standalone: true,
  	imports: [
		MatIconModule,
  	  	CommonModule,
  	  	NavbarComponent,
		FooterComponent,
  	],
  	templateUrl: './faq.component.html',
  	styleUrl: './faq.component.css',
	providers: [
		FaqService,
	]
})
export class FaqComponent implements OnInit {
	public faqs?: IFaq[]

	constructor (
		private faqService: FaqService,
	) {}

	async ngOnInit(): Promise<void> {
		const { data, errors } = await this.faqService.getFaqs();

		if (errors) {
			alert(errors[0].message);
			return;
		}

		this.faqs = data.getFaqs as IFaq[];
	}

	async changeShowFunction (faq: IFaq) {
		faq.show = !faq.show;
	}
}
