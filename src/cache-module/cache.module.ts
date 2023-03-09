import { RedisModule } from '@liaoliaots/nestjs-redis';
import { Global, Module } from '@nestjs/common';
import { RedisStringDelAdapter } from './string/adapter/redis-string-del.adapter';
import { RedisStringGetAdapter } from './string/adapter/redis-string-get.adapter';
import { RedisStringSetAdapter } from './string/adapter/redis-string-set.adapter';
import { REDIS_STRING_DEL_OUTBOUND_PORT } from './string/out-port/redis-string-del.op';
import { REDIS_STRING_GET_OUTBOUND_PORT } from './string/out-port/redis-string-get.op';
import { REDIS_STRING_SET_OUTBOUND_PORT } from './string/out-port/redis-string-set.op';
import { redisConfigAsync } from '../config-module/cache.config';

const customProviders = [
  {
    provide: REDIS_STRING_DEL_OUTBOUND_PORT,
    useClass: RedisStringDelAdapter,
  },
  {
    provide: REDIS_STRING_GET_OUTBOUND_PORT,
    useClass: RedisStringGetAdapter,
  },
  {
    provide: REDIS_STRING_SET_OUTBOUND_PORT,
    useClass: RedisStringSetAdapter,
  },
];
@Module({
  imports: [RedisModule.forRootAsync(redisConfigAsync)],
  providers: customProviders,
  exports: customProviders,
})
export class CustomCacheModule {}
