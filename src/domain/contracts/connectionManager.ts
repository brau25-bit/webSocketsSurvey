
export interface ConnectionManager {
    join(client: WebSocket, pollId: number): Promise<void>;
    leavePoll(client: WebSocket, pollId: number): Promise<void>;
    broadcast(pollId: number, event: string): Promise<void>;
}