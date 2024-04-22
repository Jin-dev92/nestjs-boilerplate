import { Injectable, LoggerService } from "@nestjs/common";

@Injectable()
export class LoggerHandler implements LoggerService {
  debug(message: any, ...optionalParams: any[]) {
    console.debug(message);
  }

  error(message: any, ...optionalParams: any[]) {
    console.error(message);
  }

  log(message: any, ...optionalParams: any[]) {
    console.log(message);
  }

  warn(message: any, ...optionalParams: any[]) {
    console.warn(message);
  }
}
