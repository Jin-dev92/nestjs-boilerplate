import { AppModule } from "./app.module";
import { RequestInterceptor } from "./infrastructure/interceptor";
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import helmet from "helmet";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.useGlobalInterceptors(new RequestInterceptor());
  await app.listen(3000);
  app.use([helmet()]);
}

bootstrap();
