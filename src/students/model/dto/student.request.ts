import { IsPositive, IsNotEmpty, IsEnum } from 'class-validator';
import { Grade } from '../interface/grade';
export class StudentRequest {
  @IsNotEmpty()
  id: number;
  @IsNotEmpty()
  name: string;
  @IsPositive()
  age: number;
  @IsEnum(Grade)
  @IsNotEmpty()
  grade: Grade;
}
