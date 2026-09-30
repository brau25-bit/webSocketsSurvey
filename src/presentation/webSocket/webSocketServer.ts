import {WebSocketServer} from 'ws';

import { connectionManager } from '../../config/container.js';
import { WebSocketClientAdapter } from '../../application/webSocketClientAdapter.js';

const wss = new WebSocketServer({
    port: 8080
});

wss.on("connection", (ws) => {
    ws.on("error", console.error);
     
    const client = new WebSocketClientAdapter(ws);

    console.log("Cliente conectado");

    ws.on("message", async (data) => {
        const message = JSON.parse(data.toString());

        await connectionManager.join(client, message.pollId);

        await connectionManager.broadcast(message.pollId, `updated:${message.pollId}`);
    });
});