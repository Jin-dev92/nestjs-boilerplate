import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ChatsModule } from './chats/chats.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@libs/database';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ChatsModule,
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['production', 'development'].includes(process.env.NODE_ENV)
        ? `.env.${process.env.NODE_ENV}`
        : '.env',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
