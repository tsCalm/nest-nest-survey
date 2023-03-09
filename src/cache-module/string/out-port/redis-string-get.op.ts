export type RedisStringGetOutPortInputDto = string;
export type RedisStringGetOutPortOutputDto = string;

export const REDIS_STRING_GET_OUTBOUND_PORT =
  'REDIS_STRING_GET_OUTBOUND_PORT' as const;

export interface RedisStringGetOutPort {
  execute(
    params: RedisStringGetOutPortInputDto,
  ): Promise<RedisStringGetOutPortOutputDto>;
}
