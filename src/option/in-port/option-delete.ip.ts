import { OptionDeleteInput, OptionDeleteOutput } from '../types';

export type OptionDeleteInPortInputDto = OptionDeleteInput;
export type OptionDeleteInPortOutputDto = OptionDeleteOutput;

// provider token
export const DELETE_OPTION_INBOUND_PORT = 'DELETE_OPTION_INBOUND_PORT' as const;

export interface DeleteOptionInPort {
  execute(
    params: OptionDeleteInPortInputDto,
  ): Promise<OptionDeleteInPortOutputDto>;
}
