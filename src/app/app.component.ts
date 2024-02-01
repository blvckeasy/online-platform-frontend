import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { webSocketService } from './services/web-socket.service';


@Component({
  	selector: 'app-root',
  	standalone: true,
  	imports: [
		CommonModule,
		RouterOutlet,
		RouterLink,
		RouterLinkActive,
	],
  	templateUrl: './app.component.html',
  	styleUrl: './app.component.css',
  	providers: [],
})
export class AppComponent implements OnInit, OnDestroy {
	constructor(private websocketService: webSocketService) { }
   
	ngOnInit(): void {
	 this.initializeSocketConnection();
	}
   
	ngOnDestroy() {
	 this.disconnectSocket();
	}
   
	// Initializes socket connection
	initializeSocketConnection() {
	 this.websocketService.connectSocket('message');
	}
   
	// Receives response from socket connection 
	receiveSocketResponse() {
	 this.websocketService.receiveStatus().subscribe((receivedMessage: any | string) => {
	  console.log(receivedMessage);
	 });
	}
   
	// Disconnects socket connection
	disconnectSocket() {
	 this.websocketService.disconnectSocket();
	}
   }