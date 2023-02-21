export type OptionDeleteInPortInputDto = number;

export type OptionDeleteInPortOutputDto = number;

// provider token
export const DELETE_OPTION_INBOUND_PORT = 'DELETE_OPTION_INBOUND_PORT' as const;

export interface DeleteOptionInPort {
  execute(
    params: OptionDeleteInPortInputDto,
  ): Promise<OptionDeleteInPortOutputDto>;
}
