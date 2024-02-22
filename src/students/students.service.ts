import { Injectable } from '@nestjs/common';
import Student from './model/interface/student';

@Injectable()
export class StudentsService {
  private readonly students: Student[] = [];

  create(student: Student) {
    this.students.push(student);
  }

  findAll(): Student[] {
    return this.students;
  }

  findOneById(id: number): Student {
    return this.students.find((student) => student.id === id);
  }
}
