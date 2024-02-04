import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-page-not-found',
    standalone: true,
    imports: [
        ButtonComponent,
        RouterLink
    ],
    templateUrl: './page-not-found.component.html',
    styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

}
