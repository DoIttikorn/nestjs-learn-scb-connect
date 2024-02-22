import {
  MiddlewareConsumer,
  Module,
  NestModule,
  ValidationPipe,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { logger } from './logger/logger.function';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
// import { APP_FILTER } from '@nestjs/core';
// import { HttpExceptionFilter } from './exception/http.exception.filter';
// import { LoggerMiddleware } from './logger/logger.middleware';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
import { ErrorsInterceptor } from './interceptor/exception.interceptor';
import { TimeoutInterceptor } from './interceptor/timeout.interceptor';
import { TeacherModule } from './teacher/teacher.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    StudentsModule,
    ConfigurationModule,
    TeacherModule,
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '10pineappleAPPLE10',
      database: 'school',
      entities: [
        __dirname + '/**/*.entity{.ts,.js}',
        __dirname + '/**/*.entity.ts',
      ],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    // },
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: false,
        transformOptions: { enableImplicitConversion: true },
      }),
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorsInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TimeoutInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TimeoutInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  // implements NestModule
  configure(consumer: MiddlewareConsumer) {
    console.log('AppModule configure...');
    consumer.apply(logger).forRoutes('students');
  }
}
