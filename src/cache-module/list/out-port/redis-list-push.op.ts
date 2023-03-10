import { Result } from 'ioredis';

export type RedisListPushOutPortInputDto = Array<string | Buffer | number>;
export type RedisListPushOutPortOutputDto = Result<number, any>;

export const REDIS_LIST_PUSH_OUTBOUND_PORT =
  'REDIS_LIST_PUSH_OUTBOUND_PORT' as const;

export interface RedisListPushOutPort {
  execute(
    params: RedisListPushOutPortInputDto,
  ): Promise<RedisListPushOutPortOutputDto>;
}
