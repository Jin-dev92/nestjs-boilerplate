import { Environment, IGetHeathCheck } from './interface';
import { Injectable } from '@nestjs/common';
import * as process from 'process';

@Injectable()
export class AppService {
  getHeathCheck(): IGetHeathCheck {
    return {
      environment: (process.env.NODE_ENV as Environment) ?? Environment.LOCAL,
    };
  }
}
