import { AppModule } from "./app.module";
import { HealthCheckModule } from "./application";
import { HttpModule } from "@nestjs/axios";
import { ValidationPipe } from "@nestjs/common";
import { PipeTransform } from "@nestjs/common/interfaces";
import { NestFactory } from "@nestjs/core";
import { TerminusModule } from "@nestjs/terminus";
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({
  path: path.resolve(`.${process.env.NODE_ENV}.env`),
});

async function bootstrap() {
  const app = await NestFactory.create([
    AppModule,
    HttpModule,
    TerminusModule,
    HealthCheckModule,
  ]);
  app.useGlobalPipes(...initialGlobalPipes());
  await app.listen(3000);
}

function initialGlobalPipes(): PipeTransform<any>[] {
  const pipes: PipeTransform<any>[] = [];
  pipes.push(
    new ValidationPipe({
      transform: true,
    }),
  );
  return pipes;
}

bootstrap();
