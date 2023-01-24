/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    rawBody: true,
    cors: true,
  });
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  const globalPrefix = 'api';
  // app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    // `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
    `🚀 Application is running on: http://localhost:${port}`,
  );
}

bootstrap();
