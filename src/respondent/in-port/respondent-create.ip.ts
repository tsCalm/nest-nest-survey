import { RespondentCreateInPut, RespondentCreateOutPut } from '../types';

export type RespondentCreateInPortInputDto = RespondentCreateInPut;
export type RespondentCreateInPortOutputDto = RespondentCreateOutPut;

// provider token
export const CREATE_RESPONDENT_INBOUND_PORT =
  'CREATE_RESPONDENT_INBOUND_PORT' as const;

export interface CreateRespondentInPort {
  execute(
    params: RespondentCreateInPortInputDto,
  ): Promise<RespondentCreateInPortOutputDto>;
}
