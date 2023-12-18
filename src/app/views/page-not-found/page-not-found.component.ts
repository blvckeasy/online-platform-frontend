import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';

@Component({
    selector: 'app-page-not-found',
    standalone: true,
    imports: [
        ButtonComponent,
    ],
    templateUrl: './page-not-found.component.html',
    styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

}
