import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { PipeTransform } from "@nestjs/common/interfaces";
import { NestFactory } from "@nestjs/core";
import helmet from "helmet";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(...initialGlobalPipes());
  await app.listen(3000);
  app.use([helmet()]);
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
