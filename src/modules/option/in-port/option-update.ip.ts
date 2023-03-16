import { OptionUpdateInput, OptionUpdateOutput } from '../types';

export type OptionUpdateInPortInputDto = OptionUpdateInput;
export type OptionUpdateInPortOutputDto = OptionUpdateOutput;

// provider token
export const UPDATE_OPTION_INBOUND_PORT = 'UPDATE_OPTION_INBOUND_PORT' as const;

export interface UpdateOptionInPort {
  execute(
    params: OptionUpdateInPortInputDto,
  ): Promise<OptionUpdateInPortOutputDto>;
}
