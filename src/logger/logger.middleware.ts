import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request from logger Middleware class...');
    // console.log('Request:', req.body);
    next();
  }

  // use(req: any, res: any, next: () => void) {
  //   console.log('Request...');
  //   console.log('Request:', req.body);
  //   next();
  // }
}
