import { Result } from 'ioredis';

export type RedisListPopOutPortInputDto = Array<string | Buffer | number>;
export type RedisListPopOutPortOutputDto = Result<number, any>;

export const REDIS_LIST_POP_OUTBOUND_PORT =
  'REDIS_LIST_POP_OUTBOUND_PORT' as const;

export interface RedisListPopOutPort {
  execute(
    params: RedisListPopOutPortInputDto,
  ): Promise<RedisListPopOutPortOutputDto>;
}
