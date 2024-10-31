import { NestFactory } from '@nestjs/core';
import { ChatModule } from './chat.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { QUEUE_IDENTIFIER } from './constants';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ChatModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: QUEUE_IDENTIFIER.CHAT_QUEUE.toString(),
        queueOptions: {
          durable: false,
        },
      },
    },
  );
  await app.listen();
}

bootstrap();
