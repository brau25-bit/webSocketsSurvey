import { ConnectionManagerClient } from "../presentation/webSocket/connectionManager.js";
import { WebSocketClientAdapter } from "../presentation/webSocket/adapter/webSocketClientAdapter.js";

const connectionManager = new ConnectionManagerClient();

export {connectionManager}