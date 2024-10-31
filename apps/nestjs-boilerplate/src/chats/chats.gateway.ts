import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { ChatsService } from './chats.service';
import { Server, Socket } from 'socket.io';
import dayjs from 'dayjs';

@WebSocketGateway(4100, {
  namespace: 'chats',
  cors: process.env.REACT_CLIENT_URL,
})
export class ChatsGateway {
  @WebSocketServer() // 웹소켓 서버 의존성 주입
  server: Server;

  constructor(private readonly chatsService: ChatsService) {}

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('chatMessage')
  handleChatMessage(client: Socket, data: { message: string }): void {
    console.log(`Received message from client ${client.id}: ${data.message}`);

    this.server.emit('chatMessage', {
      user: client.id,
      message: data.message,
      timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    });
  }
}
