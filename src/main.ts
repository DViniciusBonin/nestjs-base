import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
  console.log(`\u001b[34m \nBackend is running in port ${process.env.PORT}\n`)
}
bootstrap();
