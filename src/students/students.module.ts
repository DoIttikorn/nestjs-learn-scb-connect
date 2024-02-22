import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { LoggerMiddleware } from '../logger/logger.middleware';
@Module({
  imports: [],
  controllers: [StudentsController],
  providers: [StudentsService],
  exports: [StudentsService],
})
export class StudentsModule implements NestModule {
  // implements NestModule
  configure(consumer: MiddlewareConsumer) {
    console.log('StudentsModule configure...');
    consumer.apply(LoggerMiddleware).forRoutes('students');
  }
}
