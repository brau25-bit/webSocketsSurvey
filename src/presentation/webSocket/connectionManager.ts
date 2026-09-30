import { ConnectionManager } from "../../domain/contracts/connectionManager.js";
import { ClientConnection } from "../../domain/contracts/clientConnection.js";

export class ConnectionManagerClient implements ConnectionManager {
    private connectionMap = new Map<number, Set<ClientConnection>>();

    async join(client: ClientConnection, pollId: number): Promise<void> {
        let clients = this.connectionMap.get(pollId);

        if(!clients){
            clients = new Set();
            this.connectionMap.set(pollId, clients);
        }

        clients.add(client);
    }

    async leavePoll(client: ClientConnection, pollId: number): Promise<void> {
        let clients = this.connectionMap.get(pollId);

        if(!clients){
            return;
        }

        clients.delete(client);
    }

    async broadcast(pollId: number, event: string): Promise<void> {
        const clients = this.connectionMap.get(pollId);

        if(!clients){
            return;
        }

        for(const client of clients){
            client.send(event);
        }
    }
}