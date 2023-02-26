import { OptionCreateInput, OptionCreateOutput } from '../types';

export type OptionCreateOutPortInputDto = OptionCreateInput;
export type OptionCreateOutPortOutputDto = OptionCreateOutput;

export const CREATE_OPTION_OUTBOUND_PORT =
  'CREATE_OPTION_OUTBOUND_PORT' as const;

export interface CreateOptionOutPort {
  execute(
    params: OptionCreateOutPortInputDto,
  ): Promise<OptionCreateOutPortOutputDto>;
}
