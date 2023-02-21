export type OptionDeleteOutPortInputDto = number;

export type OptionDeleteOutPortOutputDto = number;

export const DELETE_OPTION_OUTBOUND_PORT =
  'DELETE_OPTION_OUTBOUND_PORT' as const;

export interface DeleteOptionOutPort {
  execute(
    params: OptionDeleteOutPortInputDto,
  ): Promise<OptionDeleteOutPortOutputDto>;
}
