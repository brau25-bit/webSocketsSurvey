import { ConnectionManagerClient } from "../presentation/webSocket/connectionManager.js";
import { WebSocketClientAdapter } from "../application/webSocketClientAdapter.js";

const connectionManager = new ConnectionManagerClient();

export {connectionManager}