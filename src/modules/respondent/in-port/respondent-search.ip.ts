import { RespondentSearchInPut, RespondentSearchOutPut } from '../types';

export type RespondentSearchInPortInputDto = RespondentSearchInPut;
export type RespondentSearchInPortOutputDto = RespondentSearchOutPut;

// provider token
export const SEARCH_RESPONDENT_INBOUND_PORT =
  'SEARCH_RESPONDENT_INBOUND_PORT' as const;

export interface SearchRespondentInPort {
  execute(
    params: RespondentSearchInPortInputDto,
  ): Promise<RespondentSearchInPortOutputDto>;
}
