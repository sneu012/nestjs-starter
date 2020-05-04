import { NestFactory, HTTP_SERVER_REF } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const serverRef: HTTP_SERVER_REF = null;
  const app = await NestFactory.create(AppModule);
  await app.listen(5000);
}
bootstrap();
