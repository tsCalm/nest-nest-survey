import { SurveySearchInPut, SurveySearchOutPut } from '../types';

export type SurveySearchInPortInputDto = SurveySearchInPut;
export type SurveySearchInPortOutputDto = SurveySearchOutPut;

// provider token
export const SEARCH_SURVEY_INBOUND_PORT = 'SEARCH_SURVEY_INBOUND_PORT' as const;

export interface SearchSurveyInPort {
  execute(
    params: SurveySearchInPortInputDto,
  ): Promise<SurveySearchInPortOutputDto>;
}
