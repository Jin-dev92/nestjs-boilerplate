import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ChatsModule } from './chats/chats.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, UserAuth } from './users/entities';
import { UserKakaoOauth } from './users/entities/user-kakao.oauth.entity';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ChatsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['production', 'development'].includes(process.env.NODE_ENV)
        ? `.env.${process.env.NODE_ENV}`
        : '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      logging: true,
      logger: 'file',
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      retryDelay: Math.floor(Math.random() * 3 * 1000) + 3,
      retryAttempts: 3,
      entities: [User, UserAuth, UserKakaoOauth],
      synchronize:
        process.env.NODE_ENV && process.env.NODE_ENV !== 'production',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
