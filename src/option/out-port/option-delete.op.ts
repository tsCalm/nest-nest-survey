import { OptionDeleteInput, OptionDeleteOutput } from '../types';

export type OptionDeleteOutPortInputDto = OptionDeleteInput;
export type OptionDeleteOutPortOutputDto = OptionDeleteOutput;

export const DELETE_OPTION_OUTBOUND_PORT =
  'DELETE_OPTION_OUTBOUND_PORT' as const;

export interface DeleteOptionOutPort {
  execute(
    params: OptionDeleteOutPortInputDto,
  ): Promise<OptionDeleteOutPortOutputDto>;
}
