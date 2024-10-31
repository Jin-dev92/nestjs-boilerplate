import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { databaseOptionFactory } from './factory';
import { UserAuthRepository, UserRepository } from '@libs/database/repository';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: databaseOptionFactory,
    }),
  ],
  providers: [DatabaseService, UserRepository, UserAuthRepository],
  exports: [DatabaseService, UserRepository, UserAuthRepository],
})
export class DatabaseModule {
  // static register(modelName?: string): DynamicModule {
  //   return {
  //     module: DatabaseModule,
  //     imports: [
  //       ConfigModule.forRoot({
  //         envFilePath: modelName
  //           ? `apps/${modelName}/.env`
  //           : `libs/database/.env`,
  //       }),
  //       TypeOrmModule.forRootAsync({
  //         imports: [ConfigModule],
  //         inject: [ConfigService],
  //         useFactory: databaseOptionFactory,
  //       }),
  //     ],
  //     exports: [DatabaseModule],
  //   };
  // }
}
