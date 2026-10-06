import WebSocket from "ws";

export class WebSocketClientAdapter {
    constructor(private ws: WebSocket){}

    send(message: string): void{
        this.ws.send(message);
    }
}