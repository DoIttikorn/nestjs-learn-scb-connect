import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { ValidationPipe } from '@nestjs/common';
// import { HttpExceptionFilter } from './exception/http.exception.filter';
// import { logger } from './logger/logger.function';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(logger);
  // app.useGlobalFilters(new HttpExceptionFilter());
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     transform: true,
  //     whitelist: true,
  //     forbidNonWhitelisted: true,
  //     transformOptions: { enableImplicitConversion: true },
  //   }),
  // );
  await app.listen(3000);
}
bootstrap();
