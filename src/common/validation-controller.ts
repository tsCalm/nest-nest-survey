import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { QueryResult } from 'typeorm';

export abstract class ValidationController {
  findValidate(obj: Array<object>, msg: string): void {
    // 파라메터가 배열 타입이 아닌 경우는 repository에 문제일 가능성이 매우 높다.
    if (!obj) throw new InternalServerErrorException();
    if (obj.length === 0) throw new BadRequestException(msg);
  }

  findOneValidate(obj: object, msg: string) {
    if (!obj) throw new BadRequestException(msg);
  }

  queryResultValidate(result: QueryResult, msg: string) {
    if (!result) throw new InternalServerErrorException();
    if (result.affected === 0) throw new BadRequestException(msg);
  }
}
