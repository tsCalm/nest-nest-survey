import { RespondentCreateInPut, RespondentCreateOutPut } from '../types';

export type RespondentCreateOutPortInputDto = RespondentCreateInPut;
export type RespondentCreateOutPortOutputDto = RespondentCreateOutPut;

export const CREATE_RESPONDENT_OUTBOUND_PORT =
  'CREATE_RESPONDENT_OUTBOUND_PORT' as const;

export interface CreateRespondentOutPort {
  execute(
    params: RespondentCreateOutPortInputDto,
  ): Promise<RespondentCreateOutPortOutputDto>;
}
