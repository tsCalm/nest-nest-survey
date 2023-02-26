import { OptionUpdateInput, OptionUpdateOutput } from '../types';

export type OptionUpdateOutPortInputDto = OptionUpdateInput;
export type OptionUpdateOutPortOutputDto = OptionUpdateOutput;

export const UPDATE_OPTION_OUTBOUND_PORT =
  'UPDATE_OPTION_OUTBOUND_PORT' as const;

export interface UpdateOptionOutPort {
  execute(
    params: OptionUpdateOutPortInputDto,
  ): Promise<OptionUpdateOutPortOutputDto>;
}
