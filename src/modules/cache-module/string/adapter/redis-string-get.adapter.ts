import { Injectable } from '@nestjs/common';
import { InjectRedis, DEFAULT_REDIS_NAMESPACE } from '@liaoliaots/nestjs-redis';
import Redis from 'ioredis';
import {
  RedisStringGetOutPort,
  RedisStringGetOutPortInputDto,
  RedisStringGetOutPortOutputDto,
} from '../out-port/redis-string-get.op';

@Injectable()
export class RedisStringGetAdapter implements RedisStringGetOutPort {
  constructor(
    @InjectRedis() private readonly _redisAdapter: Redis, // or // @InjectRedis(DEFAULT_REDIS_NAMESPACE) private readonly _redisAdapter: Redis
  ) {}

  async execute(
    params: RedisStringGetOutPortInputDto,
  ): Promise<RedisStringGetOutPortOutputDto> {
    return this._redisAdapter.get(params);
  }
}
