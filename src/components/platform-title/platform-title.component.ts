import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-platform-title',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './platform-title.component.html',
  styleUrl: './platform-title.component.css'
})
export class PlatformTitleComponent {

}
