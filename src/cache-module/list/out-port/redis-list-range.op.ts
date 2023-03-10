import { Result } from 'ioredis';

export type RedisListRangeOutPortInputDto = {
  key: string;
  start: number;
  stop: number;
};

export type RedisListRangeOutPortOutputDto = Result<string[], any>;

export const REDIS_LIST_RANGE_OUTBOUND_PORT =
  'REDIS_LIST_RANGE_OUTBOUND_PORT' as const;

export interface RedisListRangeOutPort {
  execute(
    params: RedisListRangeOutPortInputDto,
  ): Promise<RedisListRangeOutPortOutputDto>;
}
