import { Request, Response, NextFunction } from 'express';

// we can use this function as a middleware in the main.ts file or in the app.module.ts file
export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request from logger Middleware function...`);
  next();
}
