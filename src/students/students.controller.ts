import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import Student from './model/interface/student';
import { StudentRequest } from './model/dto/student.request';
import { ConfigurationService } from '../configuration/configuration.service';
import { Observable } from 'rxjs';
// import { ParseIntPipe } from '../parse-int/parse-int.pipe';
// import { HttpExceptionFilter } from '../exception/http.exception.filter';

@Controller('students')
// @UseFilters(HttpExceptionFilter)
export class StudentsController {
  constructor(
    private readonly studentsService: StudentsService,
    private readonly configuartionService: ConfigurationService,
  ) {}

  @Post()
  async create(@Body() body: StudentRequest) {
    // create a student
    this.studentsService.create(body);
  }

  @Get()
  async findAll(): Promise<Student[]> {
    // find all students
    return this.studentsService.findAll();
  }

  // @Get('/error')
  // async findStudentButError() {
  //   throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  // }

  @Get(':id')
  // @UseFilters(HttpExceptionFilter)
  async findOneById(@Param('id', ParseIntPipe) id: number): Promise<Student> {
    // find one student by id
    // @Param() params: any
    // @Param('id')
    // if un-comment this line, the global filter will be used
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    // if use @Param()
    // console.log(params.id);
    // return this.studentsService.findOneById(+params.id);
    console.log(id);
    return this.studentsService.findOneById(id);
  }

  @Get('/all/observable')
  findAllObservable(): Observable<Student[]> {
    // find all students
    throw new HttpException('not found', HttpStatus.NOT_FOUND);
    // return of(this.studentsService.findAll());
  }

  @Get('configuration')
  getEnv() {
    return this.configuartionService.isProduction();
  }
}
