import { Controller } from '@nestjs/common';
import { ChatService } from './chat.service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

@Controller()
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @MessagePattern('chat-messages')
  getChatMessages(@Payload() data: number[], @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    // const messages = context.getMessage();
    channel.ack(context.getMessage());
  }
}
