import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
import { StudentsService } from './students/students.service';
import { ConfigurationService } from './configuration/configuration.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly studentsService: StudentsService,
    private readonly configurationService: ConfigurationService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  getTest(@Res() res: Response, @Req() req: Request) {
    console.log('Request:', req.body);
    res.status(203).send('Hello World!');
  }

  @Get('/app/students')
  getStudents() {
    return this.studentsService.findAll();
  }

  @Get('/app/configuration')
  getConfiguration() {
    return this.configurationService.isProduction();
  }
}
