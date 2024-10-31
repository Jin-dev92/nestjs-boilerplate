import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ClientModuleIdentifier, QUEUE_IDENTIFIER } from '@libs/rabbit-mq';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ClientModuleIdentifier.CHAT_SERVICE,
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: QUEUE_IDENTIFIER.CHAT_QUEUE.toString(),
          noAck: false,
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
