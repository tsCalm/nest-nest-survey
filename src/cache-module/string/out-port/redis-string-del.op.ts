export type RedisStringDelOutPortInputDto = string;
export type RedisStringDelOutPortOutputDto = number;

export const REDIS_STRING_DEL_OUTBOUND_PORT =
  'REDIS_STRING_DEL_OUTBOUND_PORT' as const;

export interface RedisStringDelOutPort {
  execute(
    params: RedisStringDelOutPortInputDto,
  ): Promise<RedisStringDelOutPortOutputDto>;
}
