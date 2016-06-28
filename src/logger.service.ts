/**
 * Logger Service
 * Provides fine-grained application logging leveraging log levels
 *
 * @author: Gopal - 06/27/2016
 */
import {Injectable} from '@angular/core';

export enum LogLevel {
    DEBUG, //defaults to 0,1,2..
    INFO,
    WARN,
    ERROR
};

@Injectable()
export class LoggerService {

  constructor(private LOG_LEVEL: number) {}

  debug(msg: any): void {
    if(this.LOG_LEVEL == LogLevel.DEBUG) {
      console.debug(msg);
    }
  }
  info(msg: any): void {
    if(this.LOG_LEVEL == LogLevel.INFO ||
       this.LOG_LEVEL == LogLevel.DEBUG) {
      console.info(msg);
    }
  }
  warn(msg: any): void {
    if(this.LOG_LEVEL == LogLevel.WARN ||
       this.LOG_LEVEL == LogLevel.INFO ||
       this.LOG_LEVEL == LogLevel.DEBUG) {
      console.warn(msg);
    }
  }
  error(msg: any): void {
    if(this.LOG_LEVEL == LogLevel.ERROR ||
       this.LOG_LEVEL == LogLevel.INFO ||
       this.LOG_LEVEL == LogLevel.DEBUG ||
       this.LOG_LEVEL == LogLevel.WARN) {
      console.error(msg);
    }
  }
};