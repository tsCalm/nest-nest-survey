import { RespondentFindAllInPut, RespondentFindAllOutPut } from '../types';

export type RespondentFindAllOutPortInputDto = RespondentFindAllInPut;
export type RespondentFindAllOutPortOutputDto = RespondentFindAllOutPut;

export const FINDALL_RESPONDENT_OUTBOUND_PORT =
  'FINDALL_RESPONDENT_OUTBOUND_PORT' as const;

export interface FindAllRespondentOutPort {
  execute(
    params: RespondentFindAllOutPortInputDto,
  ): Promise<RespondentFindAllOutPortOutputDto>;
}
