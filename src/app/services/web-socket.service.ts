import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { environment } from '../../environments/environment';


@Injectable({
	providedIn: 'root',
})
export class webSocketService {
	private webSocket: Socket;
	constructor() {
		this.webSocket = new Socket({
			url: environment.BACKEND_WEBSOCKET_URL,
			options: {},
		});
	}

	// this method is used to start connection/handhshake of socket with server
	connectSocket(message: string) {
		// this.webSocket.emit('connect', message);
	}

	// this method is used to get response from server
	receiveStatus() {
		return this.webSocket.fromEvent('/get-response');
	}

	// this method is used to end web socket connection
	disconnectSocket() {
		this.webSocket.disconnect();
	}
}