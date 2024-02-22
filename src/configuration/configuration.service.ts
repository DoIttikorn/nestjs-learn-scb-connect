import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigurationService {
  get(key: string): string {
    return process.env[key];
  }

  isProduction(): boolean {
    return process.env.NODE_ENV === 'production';
  }
}
