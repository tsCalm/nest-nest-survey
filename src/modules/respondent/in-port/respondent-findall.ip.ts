import { RespondentFindAllInPut, RespondentFindAllOutPut } from '../types';

export type RespondentFindAllInPortInputDto = RespondentFindAllInPut;
export type RespondentFindAllInPortOutputDto = RespondentFindAllOutPut;

// provider token
export const FINDALL_RESPONDENT_INBOUND_PORT =
  'FINDALL_RESPONDENT_INBOUND_PORT' as const;

export interface FindAllRespondentInPort {
  execute(
    params: RespondentFindAllInPortInputDto,
  ): Promise<RespondentFindAllInPortOutputDto>;
}
