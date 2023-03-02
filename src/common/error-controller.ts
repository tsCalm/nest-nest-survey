import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

export abstract class ErrorController {
  isEmptyArray(arr: Array<object>, msg: string): void {
    // 파라메터가 배열 타입이 아닌 경우는 repository에 문제일 가능성이 매우 높다.
    if (!Array.isArray(arr)) throw new InternalServerErrorException();
    if (arr.length === 0) throw new NotFoundException(msg);
  }

  isEmpty(obj: object, msg: string) {
    if (!obj) throw new NotFoundException(msg);
  }

  // queryResultValidate(result: QueryResult, msg: string) {
  //   if (!result) throw new InternalServerErrorException();
  //   if (result.affected === 0) throw new BadRequestException(msg);
  // }
}
