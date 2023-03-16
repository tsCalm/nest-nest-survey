import { OptionCreateInput, OptionCreateOutput } from '../types';

export type OptionCreateInPortInputDto = OptionCreateInput;
export type OptionCreateInPortOutputDto = OptionCreateOutput;

// provider token
export const CREATE_OPTION_INBOUND_PORT = 'CREATE_OPTION_INBOUND_PORT' as const;

export interface CreateOptionInPort {
  execute(
    params: OptionCreateInPortInputDto,
  ): Promise<OptionCreateInPortOutputDto>;
}
