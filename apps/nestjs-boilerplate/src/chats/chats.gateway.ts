import { WebSocketGateway } from '@nestjs/websockets';
import { ChatsService } from './chats.service';

@WebSocketGateway()
export class ChatsGateway {
  constructor(private readonly chatsService: ChatsService) {}
}
