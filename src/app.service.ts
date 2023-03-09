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
  constructor(
    @Inject(REDIS_STRING_DEL_OUTBOUND_PORT)
    private readonly redisStringDelOutPort: RedisStringDelOutPort,
    @Inject(REDIS_STRING_GET_OUTBOUND_PORT)
    private readonly redisStringGetOutPort: RedisStringGetOutPort,
    @Inject(REDIS_STRING_SET_OUTBOUND_PORT)
    private readonly redisStringSetOutPort: RedisStringSetOutPort,
  ) {}
  getHello() {
    return this.redisStringGetOutPort.execute('nestNewCache');
  }
}
