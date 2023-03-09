export type RedisStringSetOutPortInputDto = {
  key: string;
  value: string;
  expire: number;
};
export type RedisStringSetOutPortOutputDto = string;

export const REDIS_STRING_SET_OUTBOUND_PORT =
  'REDIS_STRING_SET_OUTBOUND_PORT' as const;

export interface RedisStringSetOutPort {
  execute(
    params: RedisStringSetOutPortInputDto,
  ): Promise<RedisStringSetOutPortOutputDto>;
}
