import { Injectable } from '@nestjs/common';
import { InjectRedis, DEFAULT_REDIS_NAMESPACE } from '@liaoliaots/nestjs-redis';
import Redis from 'ioredis';
import {
  RedisStringSetOutPort,
  RedisStringSetOutPortInputDto,
} from '../out-port/redis-string-set.op';

@Injectable()
export class RedisStringSetAdapter implements RedisStringSetOutPort {
  constructor(
    @InjectRedis() private readonly _redisAdapter: Redis, // or // @InjectRedis(DEFAULT_REDIS_NAMESPACE) private readonly _redisAdapter: Redis
  ) {}

  async execute(params: RedisStringSetOutPortInputDto): Promise<'OK'> {
    return this._redisAdapter.set(
      params.key,
      params.value,
      'EX',
      params.expire ?? 10,
    );
  }
}
