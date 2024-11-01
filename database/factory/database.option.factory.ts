import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseOptionFactory = (
  configService: ConfigService,
): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> => {
  const env = configService.get('NODE_ENV');
  return {
    type: 'postgres',
    host: configService.get('DB_HOST'),
    port: +configService.get('DB_PORT'),
    logging: true,
    username: configService.get('POSTGRES_USER'),
    password: configService.get('POSTGRES_PASSWORD'),
    database: configService.get('POSTGRES_DB'),
    retryDelay: Math.floor(Math.random() * 3 * 1000) + 3,
    retryAttempts: 3,
    synchronize: env && env !== 'production',
  };
};
