import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return '0.0.2';
  }
}
