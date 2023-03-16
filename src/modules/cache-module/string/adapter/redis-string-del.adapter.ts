import { Injectable } from '@nestjs/common';
import { InjectRedis, DEFAULT_REDIS_NAMESPACE } from '@liaoliaots/nestjs-redis';
import Redis from 'ioredis';
import {
  RedisStringDelOutPortInputDto,
  RedisStringDelOutPortOutputDto,
} from '../out-port/redis-string-del.op';

@Injectable()
export class RedisStringDelAdapter implements RedisStringDelAdapter {
  constructor(
    @InjectRedis() private readonly _redisAdapter: Redis, // or // @InjectRedis(DEFAULT_REDIS_NAMESPACE) private readonly _redisAdapter: Redis
  ) {}

  async execute(
    params: RedisStringDelOutPortInputDto,
  ): Promise<RedisStringDelOutPortOutputDto> {
    return this._redisAdapter.del(params);
  }
}
