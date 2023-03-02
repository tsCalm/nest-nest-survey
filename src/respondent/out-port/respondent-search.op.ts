import { RespondentSearchInPut, RespondentSearchOutPut } from '../types';

export type RespondentSearchOutPortInputDto = RespondentSearchInPut;
export type RespondentSearchOutPortOutputDto = RespondentSearchOutPut;

export const SEARCH_RESPONDENT_OUTBOUND_PORT =
  'SEARCH_RESPONDENT_OUTBOUND_PORT' as const;

export interface SearchRespondentOutPort {
  execute(
    params: RespondentSearchOutPortInputDto,
  ): Promise<RespondentSearchOutPortOutputDto>;
}
