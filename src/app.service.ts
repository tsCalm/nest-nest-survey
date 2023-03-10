import { Inject, Injectable } from '@nestjs/common';
import {
  RedisStringDelOutPort,
  REDIS_STRING_DEL_OUTBOUND_PORT,
} from './cache-module/string/out-port/redis-string-del.op';
import {
  RedisStringGetOutPort,
  REDIS_STRING_GET_OUTBOUND_PORT,
} from './cache-module/string/out-port/redis-string-get.op';
import {
  RedisStringSetOutPort,
  REDIS_STRING_SET_OUTBOUND_PORT,
} from './cache-module/string/out-port/redis-string-set.op';

@Injectable()
export class AppService {
  getHello() {
    return '0.0.2';
  }
}
